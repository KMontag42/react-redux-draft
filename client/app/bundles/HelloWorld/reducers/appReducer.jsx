import Immutable from 'immutable';

import actionTypes from '../constants/appConstants';

export const $$initialState = Immutable.fromJS({
  connectedUsers: [], // this is the default state that would be used if one were not passed into the store
  participatingUsers: [],
  draft: {
    currentRound: 0,
    roundTime: 0,
    roundPickOrder: [],
    currentPick: 0
  },
  picks: []
});

export default function helloWorldReducer($$state = $$initialState, action) {
  const { type } = action;

  switch (type) {
    case actionTypes.USER_CONNECTED:
      let lastId = parseInt($$state.get('connectedUsers').last()) + 1;
      return $$state.set('connectedUsers', $$state.get('connectedUsers').push(lastId));

    case actionTypes.JOIN_DRAFT:
      let _lastId = parseInt($$state.get('participatingUsers').last()) + 1;
      return $$state.set('participatingUsers', $$state.get('participatingUsers').push(_lastId));

    case actionTypes.MAKE_PICK:
      const { userId, contestantId } = action;
      let newPicks = $$state.get('picks').push({
        userId: userId,
        contestantId: contestantId,
        round: 1,
        order: $$state.get('picks').size
      });
      console.log(newPicks);
      return $$state.set('picks', newPicks);

    default:
      return $$state;
  }
}
