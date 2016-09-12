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
  const { userConnected, makePick, nextRound, startDraft, leaveDraft } = actions;
  const users = $$appStore.get('users');
  const clientUser = $$appStore.get('clientUser');
  const currentPick = $$appStore.get('draft').get('currentPick');
  const roundPickOrder = $$appStore.get('draft').get('roundPickOrder');
  console.log(currentPick, roundPickOrder);

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
        } else if (data.type == 'LEAVE') {
          console.log('player is leaving');
          console.log(data.data.state.connectedUsers);
          leaveDraft(data);
        } else if (data.type == 'PICK') {
          makePick(data);
          const { roundPickOrder, currentPick } = data.data.state.draft;
          console.log(roundPickOrder, currentPick);
          if (roundPickOrder[currentPick - 1] && roundPickOrder[currentPick - 1].id == clientUser.get('id') && currentPick >= roundPickOrder.length ) {
            console.log('doing nextRound');
            this.perform('next_round');
          }
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
        return this.perform('next_round');
      },
      make_pick: function (contestantId) {
        const clientUser = $$appStore.get('clientUser');
        const currentPick = $$appStore.get('draft').get('currentPick');
        const roundPickOrder = $$appStore.get('draft').get('roundPickOrder');

        if ((typeof roundPickOrder.get(currentPick) === 'undefined') || clientUser.get('id') === roundPickOrder.get(currentPick).get('id')) {
          return this.perform('make_pick', {contestantId: contestantId});
        } else {
          return false;
        }
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
