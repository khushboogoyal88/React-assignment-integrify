import React, {Component, Fragment} from 'react';
import './App.css';
import axios from 'axios';
import Users from './components/users/Users'

class App extends Component {
  state={
    users: [],
    loading: false,
  }
  async componentDidMount(){
    this.setState({loading: true});
    const res = await axios.get('https://jsonplaceholder.typicode.com/users');
    this.setState({users: res.data, loading: false});
  }

  render() {
    return (
      <Fragment>
        <div className='App'>
          <div className='container'>
            <Users users={this.state.users} loading={this.state.loading}/>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default App;
