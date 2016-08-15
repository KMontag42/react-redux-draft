import React, { PropTypes } from 'react';

const DraftHeader = ({users, userConnected}) => (
  <div onClick={userConnected}>
    {users.map(u => {
      return <p key={u}>{u}</p>;
    })}
  </div>
);

DraftHeader.propTypes = {
  userConnected: PropTypes.func.isRequired,
  users: PropTypes.object.isRequired // List
};

export default DraftHeader