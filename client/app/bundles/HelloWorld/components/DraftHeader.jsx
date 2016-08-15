import React, { PropTypes } from 'react';
import User from './User';

const DraftHeader = ({connectedUsers, userConnected, makePick}) => (
  <div onClick={() => makePick(1,1)}>
    {connectedUsers.map(u => {
      return <User user={u} key={u}/>;
    })}
  </div>
);

DraftHeader.propTypes = {
  userConnected: PropTypes.func.isRequired,
  makePick: PropTypes.func.isRequired,
  connectedUsers: PropTypes.object.isRequired // List
};

export default DraftHeader