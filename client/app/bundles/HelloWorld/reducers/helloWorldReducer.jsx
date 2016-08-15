import Immutable from 'immutable';

import actionTypes from '../constants/helloWorldConstants';

export const $$initialState = Immutable.fromJS({
  users: [], // this is the default state that would be used if one were not passed into the store
});

export default function helloWorldReducer($$state = $$initialState, action) {
  const { type } = action;

  switch (type) {
    case actionTypes.USER_CONNECTED:
      let lastId = parseInt($$state.get('users').last()) + 1;
      return $$state.set('users', $$state.get('users').push(lastId));

    default:
      return $$state;
  }
}
