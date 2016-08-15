import React, { PropTypes } from 'react';

const DraftHeader = ({users, userConnected}) => (
  <div onClick={userConnected}>
    {users.map(u => {
      return <span key={u}>{u}</span>;
    })}
  </div>
);

DraftHeader.propTypes = {
  userConnected: PropTypes.func.isRequired,
  users: PropTypes.object.isRequired // List
};

export default DraftHeader