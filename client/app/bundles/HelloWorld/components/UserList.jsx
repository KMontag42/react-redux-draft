import React, { PropTypes } from 'react';
import User from './User';
import _ from 'underscore';

const UserList = ({connectedUsers, participatingUsers}) => {
  return (
    <div>
      {participatingUsers.map(u => {
        const online = _.contains(_.map(connectedUsers.toArray(), (x) => x.get('id')), u.get('id'));
        return <User user={u} key={'user'+u.get('id')+(new Date()).getTime()} online={online} displayOnline={true} useStyle={false}/>
      })}
    </div>
  )
};

UserList.propTypes = {
  connectedUsers: PropTypes.object.isRequired,
  clientUser: PropTypes.object.isRequired,
  participatingUsers: PropTypes.object.isRequired,
};

export default UserList
