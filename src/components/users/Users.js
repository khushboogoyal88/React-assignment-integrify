import React from 'react'
import UserItem from './UserItem'
import Spinner from '../layout/Spinner'
import PropTypes from 'prop-types' 


const Users =({users, loading}) => {
        return (
          <div>
            {loading ? 
              <Spinner />
            : (
              <div className='userstyle'>
                {users.map((user) => {
                  return <UserItem key={user.id} user={user} />;
                })}
              </div>
            )}
          </div>
        );
}

Users.protoTypes = {
    users: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired,
}
export default Users
