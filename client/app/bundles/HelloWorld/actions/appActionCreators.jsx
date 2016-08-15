import actionTypes from '../constants/appConstants';

export function userConnected(id) {
  return {
    type: actionTypes.USER_CONNECTED,
    id
  };
}
