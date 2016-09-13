import React, { PropTypes } from 'react';
import User from './User';
import ChooseContestant from './ChooseContestant';
import _ from 'underscore';

const DraftHeader = ({connectedUsers, currentPick, contestants, clientUser, roundPickOrder, picks}) => {
  let restUsers;
  if (roundPickOrder.toArray().length === 0) {
    restUsers = connectedUsers.toArray();
  } else {
    restUsers = _.rest(roundPickOrder.toArray(), (currentPick || 0));
  }

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

  const remainingContestants = _.reject(contestants.toArray(), (x) => {
    return _.some(picks.toArray(), (y) => y.get('contestantId') === x.get('name'))
  });

  return (
    <div style={style}>
      {restUsers.map(u => {
        const online = _.contains(_.map(connectedUsers.toArray(), (x) => x.get('id')), u.get('id'));
        return <User user={u} key={'user'+u.get('id')+(new Date()).getTime()} displayOnline={true} online={online}/>;
      })}
      {roundPickOrder.size === 0 && <div>
        <button onClick={() => window.App.draft.start()} className="btn btn-primary">Start</button>
      </div>}
      {showModal && <ChooseContestant contestants={remainingContestants}/>}
    </div>
  )
};

DraftHeader.propTypes = {
  connectedUsers: PropTypes.object.isRequired,
  contestants: PropTypes.object.isRequired,
  clientUser: PropTypes.object.isRequired,
  roundPickOrder: PropTypes.object.isRequired,
  picks: PropTypes.object.isRequired,
  currentPick: PropTypes.number.isRequired
};

export default DraftHeader
