import { connect } from 'react-redux'
import { userConnected } from '../actions/appActionCreators'
import DraftHeader from '../components/DraftHeader'

const mapStateToProps = (state) => {
  return {
    connectedUsers: state.$$appStore.get('connectedUsers')
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