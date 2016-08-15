import actionTypes from '../constants/appConstants';

export function userConnected(id) {
  return {
    type: actionTypes.USER_CONNECTED,
    id
  };
}

export function joinDraft(id) {
  return {
    type: actionTypes.JOIN_DRAFT,
    id
  };
}

export function makePick(userId, contestantId, round) {
  console.log(round);
  return {
    type: actionTypes.MAKE_PICK,
    userId,
    contestantId,
    round
  };
}
