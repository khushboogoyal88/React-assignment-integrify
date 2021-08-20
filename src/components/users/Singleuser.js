import React, {Component, Fragment} from 'react'
import Spinner from '../layout/Spinner';
import {Link} from 'react-router-dom'

export class Singleuser extends Component {
    componentDidMount (){
        this.props.getUser(this.props.match.params.userId)
    }
    render(){
        const {name, username, email, phone, company, website, address} = this.props.user;
        // console.log(company.name);
        if (this.props.loading) return <Spinner/>
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
      <p>Company: {company.name}</p>
      <p>Website: {website}</p>
      <p>Address:</p>
      <ul>
        <li>street: {address.street}</li>
        <li>suite: {address.suite}</li>
        <li>city: {address.city}</li>
        <li>zipcode: {address.zipcode}</li>
      </ul>
    </div>
  </Fragment>
);
    }
    
}

export default Singleuser
