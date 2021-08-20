import React, {Component, Fragment} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import axios from 'axios';
import Users from './components/users/Users'
import Singleuser from './components/users/Singleuser'


class App extends Component {
  state={
    users: [],
    user: {},
    loading: false,
  }

  // all users loads at the start
  async componentDidMount(){
    this.setState({loading: true});
    const res = await axios.get('https://jsonplaceholder.typicode.com/users');
    this.setState({users: res.data, loading: false});
  }

  // get single user
   getUser = async (userId) =>{
    this.setState({ loading: true });
    const res = await axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`);
    this.setState({ user: res.data, loading: false });
  }

  render() {
    const {users, loading, user} = this.state;
    return (
      <Router>
        <div className='App'>
          <div className='container'>
            <Switch>
              <Route
                exact
                path='/'
                render={(props) => (
                  <Fragment>
                    <Users
                      users={users}
                      loading={loading}
                    />
                  </Fragment>
                )}
              />
              <Route
                exact
                path='/users/:userId'
                render={(props) => (
                    <Singleuser {...props} getUser={this.getUser} user={user} loading={loading}/>
                )}
              />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
