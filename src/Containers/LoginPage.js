import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import LoginForm from '../Components/LoginForm'
import SignUpForm from '../Components/SignUpForm'

class LoginPage extends Component {

  logInForm = () => {
    return <LoginForm logIn={this.props.logIn} userExistsState={this.props.userExistsState} userExistsCheck={this.props.userExistsCheck} />
  };

  signUpForm = () => {
    return <SignUpForm logIn={this.props.logIn} userExistsCheck={this.props.userExistsCheck} userExistsState={this.props.userExistsState} />
  };

  render() {
    return (
      <Router>
        <React.Fragment>
          <Route exact path="/" render={this.logInForm} />
          <Route exact path="/sign_up" render={this.signUpForm} />
        </React.Fragment>
      </Router>
    )
  }
}

export default LoginPage
