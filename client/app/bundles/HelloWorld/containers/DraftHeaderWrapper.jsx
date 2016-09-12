import { connect } from 'react-redux';
import DraftHeader from '../components/DraftHeader';

const mapStateToProps = (state) => {
  return {
    connectedUsers: state.$$appStore.get('connectedUsers'),
    contestants: state.$$appStore.get('contestants'),
    clientUser: state.$$appStore.get('clientUser'),
    roundPickOrder: state.$$appStore.get('draft').get('roundPickOrder'),
    picks: state.$$appStore.get('picks'),
    round: state.$$appStore.get('draft').get('currentRound'),
    currentPick: state.$$appStore.get('draft').get('currentPick')
  };
};

const mapDispatchToProps = (dispatch) => {
  return { }
};

const DraftHeaderWrapper = connect(
  mapStateToProps,
  mapDispatchToProps
)(DraftHeader);

export default DraftHeaderWrapper
