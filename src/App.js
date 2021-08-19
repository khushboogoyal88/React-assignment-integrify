import React, {Component, Fragment} from 'react';
import './App.css';
import Users from './components/users/Users'

class App extends Component {
  render(){

  return (
    <Fragment>
      <div className='App'>
        <div className='container'>
          <Users />
        </div>
      </div>
    </Fragment>
  );};
}

export default App;
