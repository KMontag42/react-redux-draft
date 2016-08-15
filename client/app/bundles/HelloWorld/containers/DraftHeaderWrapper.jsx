import { connect } from 'react-redux'
import { userConnected, makePick } from '../actions/appActionCreators'
import DraftHeader from '../components/DraftHeader'

const mapStateToProps = (state) => {
  return {
    connectedUsers: state.$$appStore.get('connectedUsers'),
    picks: state.$$appStore.get('picks')
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    userConnected: (id) => {
      dispatch(userConnected(id));
    },
    makePick: (userId, contestantId, round) => {
      dispatch(makePick(userId, contestantId, round));
    }
  }
};

const DraftHeaderWrapper = connect(
  mapStateToProps,
  mapDispatchToProps
)(DraftHeader);

export default DraftHeaderWrapper