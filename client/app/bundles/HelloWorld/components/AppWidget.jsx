import React, { PropTypes } from 'react';

import DraftHeaderWrapper from '../containers/DraftHeaderWrapper';
import PickChartWrapper from '../containers/PickChartWrapper';
import UserListWrapper from '../containers/UserListWrapper';

// Simple example of a React "dumb" component
export default class AppWidget extends React.Component {
  static propTypes = {
    currentRound: React.PropTypes.number
  };

  render() {
    const { currentRound } = this.props;

    return (
      <div className="container-fluid App">
        <div className="col-xs-10 col-sm-11">
          {currentRound != -1 && <DraftHeaderWrapper/>}
          <PickChartWrapper/>
        </div>
        <div className="col-xs-2 col-sm-1">
          {currentRound != -1 && <UserListWrapper/>}
        </div>
      </div>
    );
  }
}
