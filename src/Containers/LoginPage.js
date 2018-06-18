import React, { Component } from 'react';

import LoginForm from '../Components/LoginForm'
import SignUpForm from '../Components/SignUpForm'

class LoginPage extends Component {

  render() {
    return (
      <React.Fragment>
        <LoginForm />
        <SignUpForm />
      </React.Fragment>
    )
  }
}

export default LoginPage
