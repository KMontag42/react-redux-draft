import React, { PropTypes } from 'react';

import DraftHeaderWrapper from '../containers/DraftHeaderWrapper';
import User from './User';
import Contestant from './Contestant';
import PickChart from './PickChart';
import ChartHeader from './ChartHeader';
import Round from './Round';
import Pick from './Pick';

// Simple example of a React "dumb" component
export default class extends React.Component {
  render() {
    return (
      <div className="container-fluid App">
        <DraftHeaderWrapper/>
        <PickChart>
          <ChartHeader>
            <User/>
          </ChartHeader>
        </PickChart>
        <Round>
          <Pick>
            <Contestant/>
          </Pick>
        </Round>
      </div>
    );
  }
}
