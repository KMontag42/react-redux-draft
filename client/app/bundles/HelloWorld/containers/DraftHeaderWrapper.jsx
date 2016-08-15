import { connect } from 'react-redux'
import { userConnected, makePick, nextRound } from '../actions/appActionCreators'
import DraftHeader from '../components/DraftHeader'

const mapStateToProps = (state) => {
  return {
    connectedUsers: state.$$appStore.get('connectedUsers'),
    picks: state.$$appStore.get('picks'),
    round: state.$$appStore.get('draft').get('currentRound')
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    userConnected: (id) => {
      dispatch(userConnected(id));
    },
    makePick: (userId, contestantId, round) => {
      dispatch(makePick(userId, contestantId, round));
    },
    nextRound: () => {
      dispatch(nextRound());
    }
  }
};

const DraftHeaderWrapper = connect(
  mapStateToProps,
  mapDispatchToProps
)(DraftHeader);

export default DraftHeaderWrapper