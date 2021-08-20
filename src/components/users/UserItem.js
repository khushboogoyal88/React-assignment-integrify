import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom'

const UserItem = ({ user: {id, name, username, website } }) => {
 
  return (
    <div className='text-center card'>
      <div
        className=' round-img all-center'
        style={{
          width: '100px',
          height: '100px',
          backgroundColor: 'lightGrey',
          textAlign: 'center',
        }}
      >
        <p style={{ fontSize: '40px' }}>{name.charAt(0)}</p>
      </div>
      <h4>{name}</h4>
      <p>@{username}</p>
      <a className='my-1' href={`http://${website}`}>
        http://{website}
      </a>
      <br />
      <Link to={`/users/${id}`} className='btn btn-primary btn-sm my-1 uppercase'>More Details</Link>
    </div>
  );
};



UserItem.propTypes={
user: PropTypes.object.isRequired,
}

export default UserItem;