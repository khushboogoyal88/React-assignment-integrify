import React, {useState, useEffect, Fragment} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import axios from 'axios';
import Users from './components/users/Users'
import Singleuser from './components/users/Singleuser'


const App =() => {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(false);

//  all users loads at the start
  useEffect(async () => {
    setLoading(true);
    const res = await axios.get('https://jsonplaceholder.typicode.com/users');
    setUsers(res.data);
    setLoading(false);
  }, [])

  // get single user
   const getUser = async (userId) =>{
    setLoading(true);
    const res = await axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`);
    setUser(res.data);
    console.log(res.data);
    setLoading(false);
  }

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
                    <Singleuser {...props} getUser={getUser} user={user} loading={loading}/>
                )}
              />
            </Switch>
          </div>
        </div>
      </Router>
    );

}

export default App;
