import React, { PropTypes } from 'react';
import _ from 'underscore';
import Pick from './Pick';
import Round from './Round';

const PickChart = ({picks, contestants}) => {
  const picksByRound = _.groupBy( picks.toArray(), (p) => p.get('round') );

  return (
    <div>
      {_.map( picksByRound, ( (value, key) => {
        return (
          <Round number={key} key={key + 'round'}>
            {value.map( (pick) => {
              return <Pick pick={pick} contestants={contestants} key={pick.get('order') + 'pick' + pick.get('round') + 'round'}/>
            })}
          </Round>
        )
      } ) )}
    </div>
  )
};

PickChart.propTypes = {
  picks: PropTypes.object.isRequired,
  contestants: PropTypes.object.isRequired
};

export default PickChart;
