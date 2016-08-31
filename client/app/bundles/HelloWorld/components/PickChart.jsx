import React, { PropTypes } from 'react';
import _ from 'underscore';
import Pick from './Pick';
import Round from './Round';

const PickChart = ({picks}) => {
  console.log(picks);
  const picksByRound = _.groupBy( picks.toArray(), (p) => {return p.round;} );

  return (
    <div>
      {_.map( picksByRound, ( (value, key) => {
        return (
          <Round number={key} key={key + 'round'}>
            {value.map( (pick) => {
              return <Pick pick={pick} key={pick.order + 'pick' + pick.round + 'round'}/>
            })}
          </Round>
        )
      } ) )}
    </div>
  )
};

PickChart.propTypes = {
  picks: PropTypes.object.isRequired
};

export default PickChart;
