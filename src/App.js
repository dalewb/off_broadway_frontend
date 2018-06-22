import React, { Component } from 'react';
import './App.css';
import LoginPage from './Containers/LoginPage';
import MainPage from './Containers/MainPage';
import Footer from './Components/Footer';

import { BrowserRouter as Router, Route } from 'react-router-dom';

const URL = 'https://mod-4-backend.herokuapp.com/api/v1/'

class App extends Component {
  state = {
    loggedIn: false,
    userExists: false,
    userId: 2,
    username: '',
    password: '',
  }

  userExistsCheck = () => {
    this.setState({
      userExists: !this.state.userExists
    });
  };

  findUser = (users, username) => {
    let thisUser = users.find(user => {
      return (
        user.username === username[0]
      )
    })
    if (thisUser) {
      this.setState({
        userId: thisUser.id
      }, () => {console.log(this.state.userId)})
      window.history.pushState({}, "new state", "/");
      this.setState({
        loggedIn: true
      })
      debugger
    } else {
      alert("User Does Not Exist")
    }
  }

  fetchUsers = () => {
    fetch(URL + 'users')
      .then(res => res.json())
      .then(users => this.findUser(users, this.state.username))
  }

  logIn = (e) => {
    e.preventDefault();
    if (!this.state.username || !this.state.password) {
      alert("Username and password fields cannot be empty.")
    } else {
      this.fetchUsers()
    }
  }

  setUserInfo = (e) => {
    this.setState({
      [e.target.name]: [e.target.value]
    }, () => {console.log(this.state)})
  }

  loggedInPage = () => {
    return <MainPage userId={this.state.userId} logIn={this.logIn} />
  };

  requireAuth = () => {
    if (!this.state.loggedIn){
      window.history.pushState({}, "new state", "/");
    }
  }

  render() {
    this.requireAuth();
    return (
      <Router>
        <div className="App">
          {this.state.loggedIn ? <React.Fragment>
            <Route exact path="/" render={this.loggedInPage} />
            <Route exact path="/new-production" render={this.loggedInPage} />
            <Route exact path="/my-productions" render={this.loggedInPage} />
            <Route exact path="/all-productions" render={this.loggedInPage} />
            </React.Fragment>: <React.Fragment>
              <LoginPage
                logIn={this.logIn}
                userExistsState={this.state.userExists}
                userExistsCheck={this.userExistsCheck}
                setUserInfo={this.setUserInfo}
              />
            </React.Fragment>
          }
        </div>
      </Router>
    );
  }
}

export default App;
