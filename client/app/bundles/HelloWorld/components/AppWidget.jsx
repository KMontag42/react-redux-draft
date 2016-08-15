import React, { PropTypes } from 'react';

import DraftHeaderWrapper from '../containers/DraftHeaderWrapper';
import PickChartWrapper from '../containers/PickChartWrapper';

// Simple example of a React "dumb" component
export default class extends React.Component {
  render() {
    return (
      <div className="container-fluid App">
        <DraftHeaderWrapper/>
        <PickChartWrapper/>
      </div>
    );
  }
}
