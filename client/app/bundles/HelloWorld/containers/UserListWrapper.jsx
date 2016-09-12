import { connect } from 'react-redux';
import UserList from '../components/UserList';

const mapStateToProps = (state) => {
  return {
    connectedUsers: state.$$appStore.get('connectedUsers'),
    participatingUsers: state.$$appStore.get('participatingUsers'),
    clientUser: state.$$appStore.get('clientUser'),
  };
};

const mapDispatchToProps = (dispatch) => {
  return { }
};

const UserListWrapper = connect(
  mapStateToProps,
  mapDispatchToProps
)(UserList);

export default UserListWrapper
