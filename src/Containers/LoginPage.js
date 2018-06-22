import React, { Component } from 'react';

import LoginForm from '../Components/LoginForm'
import SignUpForm from '../Components/SignUpForm'

import { BrowserRouter as Router, Route } from 'react-router-dom';

class LoginPage extends Component {

  logInForm = () => {
    return <LoginForm logIn={this.props.logIn} userExistsState={this.props.userExistsState} userExistsCheck={this.props.userExistsCheck} setUserInfo={this.props.setUserInfo}/>
  };

  signUpForm = () => {
    return <SignUpForm logIn={this.props.logIn} userExistsCheck={this.props.userExistsCheck} userExistsState={this.props.userExistsState} />
  };

  render() {
    return (
      <Router>
        <div id='contentContainer'>
          <Route exact path="/" render={this.logInForm} />
          <Route exact path="/sign_up" render={this.signUpForm} />
        </div>
      </Router>
    )
  }
}

export default LoginPage
