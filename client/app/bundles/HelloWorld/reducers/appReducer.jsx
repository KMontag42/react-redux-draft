import Immutable from 'immutable';

import actionTypes from '../constants/appConstants';

export const $$initialState = Immutable.fromJS({
  connectedUsers: [], // this is the default state that would be used if one were not passed into the store
  participatingUsers: [],
  draft: {
    currentRound: 1,
    roundTime: 0,
    roundPickOrder: [],
    currentPick: 0
  },
  picks: [],
  clientUser: {}
});

export default function ($$state = $$initialState, action) {
  const { type, data } = action;

  switch (type) {
    case actionTypes.USER_CONNECTED:
    case actionTypes.JOIN_DRAFT:
    case actionTypes.LEAVE_DRAFT:
    case actionTypes.MAKE_PICK:
    case actionTypes.NEXT_ROUND:
    case actionTypes.START_DRAFT:
      return $$state.mergeDeep(data.data.state);

    default:
      return $$state;
  }
}
