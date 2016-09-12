import React, { PropTypes } from 'react';
import User from './User';
import UserCarousel from './UserCarousel';
import ChooseContestant from './ChooseContestant';
import _ from 'underscore';

const DraftHeader = ({connectedUsers, currentPick, contestants, clientUser, roundPickOrder}) => {
  const restUsers = _.rest(connectedUsers.toArray(), (currentPick || 0));

  const style = {
    height: '220px',
    border: '1px solid black',
    paddingTop: '2.5px',
    paddingLeft: '2.5px',
    marginTop: '1em'
  };

  let showModal;

  if (roundPickOrder.get(currentPick)) {
    showModal = (clientUser.get('id') === roundPickOrder.get(currentPick).get('id'));
  }

  console.log(restUsers);

  return (
    <div style={style}>
      {restUsers.map(u => <User user={u} key={'user'+u.get('id')+(new Date()).getTime()} displayOnline={false}/>)}
      {roundPickOrder.size === 0 && <button onClick={() => window.App.draft.start()} className="btn btn-primary">Start</button>}
      {showModal && <ChooseContestant contestants={contestants}/>}
    </div>
  )
};

DraftHeader.propTypes = {
  connectedUsers: PropTypes.object.isRequired,
  contestants: PropTypes.object.isRequired,
  clientUser: PropTypes.object.isRequired,
  roundPickOrder: PropTypes.object.isRequired,
  currentPick: PropTypes.number.isRequired
};

export default DraftHeader
