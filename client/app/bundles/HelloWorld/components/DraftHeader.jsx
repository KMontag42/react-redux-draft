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

  let showModal;

  if (roundPickOrder.get(currentPick)) {
    showModal = (clientUser.get('id') === roundPickOrder.get(currentPick).get('id'));
  }

  const remainingContestants = _.reject(contestants.toArray(), (x) => {
    return _.some(picks.toArray(), (y) => y.get('contestantId') === x.get('name'))
  });

  return (
    <div className="m-t-1 p-t-1 p-l-1">
      <div className="row">
        {restUsers.map(u => {
          const online = _.contains(_.map(connectedUsers.toArray(), (x) => x.get('id')), u.get('id'));
          return <User user={u} key={'user'+u.get('id')+(new Date()).getTime()} displayOnline={true} online={online}/>;
        })}
      </div>
      <div className="row">
        {roundPickOrder.size === 0 && (clientUser.get("username") === "kyle") && <div>
          <button onClick={() => window.App.draft.start()} className="btn btn-primary">Start</button>
        </div>}
      </div>
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
