import React, { PropTypes } from 'react';
import User from './User';
import UserCarousel from './UserCarousel';
import _ from 'underscore';

const DraftHeader = ({connectedUsers, userConnected, round, currentPick}) => {
  if (currentPick > 0) {
    connectedUsers = _.rest(connectedUsers.toArray(), currentPick);
  }

  console.log(round);

  return (
    <div>
      <button onClick={() => window.App.draft.next_round()} className="btn btn-primary">Next Round</button>
      <button onClick={() => window.App.draft.make_pick(1)} className="btn btn-primary">Make Pick</button> {/*contestant id*/}
      <button onClick={() => window.App.draft.start()} className="btn btn-primary">Start</button>
      <br/>
      <UserCarousel>
        {connectedUsers.map(u => <User user={u} key={u}/>)}
      </UserCarousel>
    </div>
  )
};

DraftHeader.propTypes = {
  round: PropTypes.number.isRequired,
  userConnected: PropTypes.func.isRequired,
  connectedUsers: PropTypes.object.isRequired,
  currentPick: PropTypes.number.isRequired
};

export default DraftHeader
