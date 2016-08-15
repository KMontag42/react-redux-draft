import actionTypes from '../constants/helloWorldConstants';

export function userConnected(id) {
  return {
    type: actionTypes.USER_CONNECTED,
    id
  };
}
