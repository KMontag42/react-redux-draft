import React, { PropTypes } from 'react';
import User from './User';

const DraftHeader = ({connectedUsers, userConnected}) => (
  <div onClick={userConnected}>
    {connectedUsers.map(u => {
      return <User user={u} key={u}/>;
    })}
  </div>
);

DraftHeader.propTypes = {
  userConnected: PropTypes.func.isRequired,
  connectedUsers: PropTypes.object.isRequired // List
};

export default DraftHeader