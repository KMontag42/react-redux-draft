import { connect } from 'react-redux'
import { userConnected } from '../actions/helloWorldActionCreators'
import DraftHeader from '../components/DraftHeader'

const mapStateToProps = (state) => {
  return {
    users: state.$$helloWorldStore.get('users')
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    userConnected: (id) => {
      dispatch(userConnected(id));
    }
  }
};

const DraftHeaderWrapper = connect(
  mapStateToProps,
  mapDispatchToProps
)(DraftHeader);

export default DraftHeaderWrapper