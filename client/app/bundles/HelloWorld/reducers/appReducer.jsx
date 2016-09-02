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
  picks: []
});

export default function ($$state = $$initialState, action) {
  const { type } = action;

  switch (type) {
    case actionTypes.USER_CONNECTED:
      return $$state.set('connectedUsers', $$state.get('connectedUsers').push(action.id));

    case actionTypes.JOIN_DRAFT:
      let _lastId = parseInt($$state.get('participatingUsers').last()) + 1;
      return $$state.set('participatingUsers', $$state.get('participatingUsers').push(_lastId));

    case actionTypes.MAKE_PICK:
      const { userId, contestantId, round } = action;

      let newPicks = $$state.get('picks').push({
        userId: userId,
        contestantId: contestantId,
        round: round,
        order: $$state.get('picks').size
      });

      const currentPick = $$state.get('draft').get('currentPick');

      $$state.set('picks', newPicks);

      return $$state.withMutations((state) => {
        state.set('picks', newPicks)
          .set('draft', $$state.get('draft').set('currentPick', currentPick + 1));
      });

    case actionTypes.NEXT_ROUND:
      const currentRound = $$state.get('draft').get('currentRound');
      const newDraft = $$state.get('draft').set('currentRound', currentRound + 1);
      return $$state.set('draft', newDraft);

    default:
      return $$state;
  }
}
