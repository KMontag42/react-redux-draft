import { connect } from 'react-redux'
import PickChart from '../components/PickChart'

const mapStateToProps = (state) => {
  return {
    picks: state.$$appStore.get('picks')
  };
};

const mapDispatchToProps = (dispatch) => {
  return { }
};

const DraftHeaderWrapper = connect(
  mapStateToProps,
  mapDispatchToProps
)(PickChart);

export default DraftHeaderWrapper