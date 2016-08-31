import React, { PropTypes } from 'react';
import AppWidget from '../components/AppWidget';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Immutable from 'immutable';
import * as appActionCreators from '../actions/appActionCreators';
import _ from 'underscore';

function select(state) {
  // Which part of the Redux global state does our component want to receive as props?
  // Note the use of `$$` to prefix the property name because the value is of type Immutable.js
  return { $$appStore: state.$$appStore };
}

// Simple example of a React "smart" component
const AppContainer = (props) => {
  const { dispatch, $$appStore } = props;
  const actions = bindActionCreators(appActionCreators, dispatch);
  const { userConnected, makePick, nextRound } = actions;
  const users = $$appStore.get('users');

  if (typeof window.App !== 'undefined' && typeof window.App.draft === 'undefined') {
    window.App.draft = window.App.cable.subscriptions.create("DraftChannel", {
      connected: function () {
        return this.join();
      },
      disconnected: function () {
        return this.leave();
      },
      rejected: function () {},
      received: function (data) {
        if (data.type == 'JOIN') {
          userConnected(data.data);
        } else if (data.type == 'PICK') {
          makePick(data.userId, data.contestantId, data.round);
        } else if (data.type == 'NEXT_ROUND') {
          nextRound()
        }
      },
      join: function () {
        return this.perform('join');
      },
      leave: function () {
        return this.perform('leave');
      },
      start: function () {
        return this.perform('start');
      },
      next_round: function () {
        return this.perform('next_round');
      },
      make_pick: function () {
        return this.perform('make_pick');
      }
    });
  }

  // This uses the ES2015 spread operator to pass properties as it is more DRY
  // This is equivalent to:
  // <AppWidget $$helloWorldStore={$$helloWorldStore} actions={actions} />
  return (
    <AppWidget {...{ userConnected, users }} />
  );
};

AppContainer.propTypes = {
  dispatch: PropTypes.func.isRequired,

  // This corresponds to the value used in function select above.
  // We prefix all property and variable names pointing to Immutable.js objects with '$$'.
  // This allows us to immediately know we don't call $$helloWorldStore['someProperty'], but
  // instead use the Immutable.js `get` API for Immutable.Map
  $$appStore: PropTypes.instanceOf(Immutable.Map).isRequired,
};

// Don't forget to actually use connect!
// Note that we don't export App, but the redux "connected" version of it.
// See https://github.com/reactjs/react-redux/blob/master/docs/api.md#examples
export default connect(select)(AppContainer);
