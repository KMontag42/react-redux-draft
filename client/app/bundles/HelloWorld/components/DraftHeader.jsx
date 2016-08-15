import React, { PropTypes } from 'react';
import User from './User';

const DraftHeader = ({connectedUsers, userConnected, makePick, round, nextRound}) => (
  <div onClick={() => makePick(1,1,round)}>
    <button onClick={nextRound}>Next Round</button>
    {connectedUsers.map(u => {
      return <User user={u} key={u}/>;
    })}
  </div>
);

DraftHeader.propTypes = {
  round: PropTypes.number.isRequired,
  userConnected: PropTypes.func.isRequired,
  makePick: PropTypes.func.isRequired,
  connectedUsers: PropTypes.object.isRequired,
  nextRound: PropTypes.func.isRequired
};

export default DraftHeader