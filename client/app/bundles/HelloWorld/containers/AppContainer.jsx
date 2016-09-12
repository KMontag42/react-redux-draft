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
  const { userConnected, makePick, nextRound, startDraft } = actions;
  const users = $$appStore.get('users');
  const clientUser = $$appStore.get('clientUser');
  const draft = $$appStore.get('draft');
  const currentPick = draft.get('currentPick');

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
          userConnected(data);
        } else if (data.type == 'PICK') {
          makePick(data);
        } else if (data.type == 'NEXT_ROUND') {
          nextRound(data)
        } else if (data.type == 'START_DRAFT') {
          startDraft(data)
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
        console.log('performing next_round');
        return this.perform('next_round');
      },
      make_pick: function (contestantId) {
        console.log('currentPick', currentPick);
        console.log('clientUser',clientUser.get('id'));
        console.log('roundPickOrder', draft.get('roundPickOrder'));
        console.log('RPO[currentPick]', draft.get('roundPickOrder').get(currentPick));
        console.log(draft.get('roundPickOrder').get(currentPick).get('id'));
        if (clientUser.get('id') === draft.get('roundPickOrder').get(currentPick).get('id'))
          return this.perform('make_pick', {contestantId});
        else
          return false;
      }
    });
  }

  // This uses the ES2015 spread operator to pass properties as it is more DRY
  // This is equivalent to:
  // <AppWidget $$helloWorldStore={$$helloWorldStore} actions={actions} />
  return (
    <AppWidget {...{ userConnected, users, clientUser }} />
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
