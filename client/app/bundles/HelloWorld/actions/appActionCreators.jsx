import actionTypes from '../constants/appConstants';

export function userConnected(data) {
  return {
    type: actionTypes.USER_CONNECTED,
    data
  };
}

export function joinDraft(data) {
  return {
    type: actionTypes.JOIN_DRAFT,
    data
  };
}

export function leaveDraft(data) {
  return {
    type: actionTypes.LEAVE_DRAFT,
    data
  };
}

export function makePick(data) {
  return {
    type: actionTypes.MAKE_PICK,
    data
  };
}

export function nextRound(data) {
  return {
    type: actionTypes.NEXT_ROUND,
    data
  }
}

export function startDraft(data) {
  return {
    type: actionTypes.START_DRAFT,
    data
  }
}