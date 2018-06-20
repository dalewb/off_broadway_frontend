import React, { Component } from 'react';
import './App.css';
import LoginPage from './Containers/LoginPage'
import MainPage from './Containers/MainPage'

class App extends Component {
  state = {
    loggedIn: false,
    userExists: false,
    userId: 2
  }

  userExistsCheck = () => {
    this.setState({
      userExists: !this.state.userExists
    });
  };

  logIn = (e) => {
    e.preventDefault();
    this.setState({
      loggedIn: true
    });
  }

  render() {
    return (
      <div className="App">
        {this.state.loggedIn ? <MainPage userId={this.state.userId} /> : <LoginPage logIn={this.logIn} userExistsState={this.state.userExists} userExistsCheck={this.userExistsCheck} />}
      </div>
    );
  }
}

export default App;
