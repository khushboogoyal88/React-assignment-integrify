import React, {useEffect, Fragment} from 'react'
import PropTypes from 'prop-types';
import Spinner from '../layout/Spinner';
import {Link} from 'react-router-dom'

const Singleuser =({user, getUser, loading, match}) => {
    // user loads at the start
  useEffect(() => {
    getUser(match.params.userId);
  }, [match.params.userId]);

const {name, username, email, phone, company, website, address} = user;

if (loading) return <Spinner/>
return (
  <Fragment>
    <Link to='/' className='btn btn-primary'>
      Back to All Users
    </Link>
    <div className='card' style={{ width: '250px', margin: '0 auto' }}>
      <p>Name: {name}</p>
      <p>Username: {username}</p>
      <p>Email: {email}</p>
      <p>Phone: {phone}</p>
      <p>Website: {website}</p>
      <p>Address:</p>
    </div>
  </Fragment>
);
}

Singleuser.propTypes = {
    user: PropTypes.object.isRequired,
    getUser: PropTypes.func.isRequired,
    loading: PropTypes.bool.isRequired,
}
export default Singleuser

