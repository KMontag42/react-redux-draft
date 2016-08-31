import React, { PropTypes } from 'react';
import User from './User';

const DraftHeader = ({connectedUsers, userConnected, round}) => (
  <div>
    <button onClick={() => window.App.draft.next_round()} className="btn btn-primary">Next Round</button>
    <button onClick={() => window.App.draft.make_pick(1,1,round)} className="btn btn-primary">Make Pick</button>
    <br/>
    {connectedUsers.map(u => {
      return <User user={u} key={u}/>;
    })}
  </div>
);

DraftHeader.propTypes = {
  round: PropTypes.number.isRequired,
  userConnected: PropTypes.func.isRequired,
  connectedUsers: PropTypes.object.isRequired
};

export default DraftHeader
