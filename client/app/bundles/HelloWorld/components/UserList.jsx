import React, { PropTypes } from 'react';
import User from './User';
import _ from 'underscore';

const UserList = ({connectedUsers, participatingUsers}) => {

  const style = {
    height: '110px',
    border: '1px solid black',
    paddingTop: '2.5px',
    paddingLeft: '2.5px',
    marginTop: '1em'
  };

  return (
    <div style={style}>
      {participatingUsers.map(u => <User user={u} key={'user'+u.get('id')} online={_.where(connectedUsers, (x) => x.get('id') === u.get('id')).length > 0}/>)}
    </div>
  )
};

UserList.propTypes = {
  connectedUsers: PropTypes.object.isRequired,
  clientUser: PropTypes.object.isRequired,
  participatingUsers: PropTypes.object.isRequired,
};

export default UserList
