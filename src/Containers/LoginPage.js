import React, { Component } from 'react';

import LoginForm from '../Components/LoginForm'
import SignUpForm from '../Components/SignUpForm'

class LoginPage extends Component {

  render() {
    return (
      <div id='contentContainer'>
        <LoginForm />
        <SignUpForm />
      </div>
    )
  }
}

export default LoginPage
