import { connect } from 'react-redux'
import { userConnected } from '../actions/appActionCreators'
import DraftHeader from '../components/DraftHeader'

const mapStateToProps = (state) => {
  return {
    users: state.$$appStore.get('users')
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