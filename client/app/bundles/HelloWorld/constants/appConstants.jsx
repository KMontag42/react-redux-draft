// See https://www.npmjs.com/package/mirror-creator
// Allows us to set up constants in a slightly more concise syntax. See:
// client/app/bundles/HelloWorld/actions/appActionCreators.jsx
import mirrorCreator from 'mirror-creator';

const actionTypes = mirrorCreator([
  'USER_CONNECTED',
  'JOIN_DRAFT',
  'LEAVE_DRAFT',
  'END_DRAFT',
  'MAKE_PICK',
  'START_DRAFT',
  'NEXT_ROUND'
]);

// actionTypes = {HELLO_WORLD_NAME_UPDATE: "HELLO_WORLD_NAME_UPDATE"}
// Notice how we don't have to duplicate HELLO_WORLD_NAME_UPDATE twice
// thanks to mirror-creator.
export default actionTypes;
