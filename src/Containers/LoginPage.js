import React, { Component } from 'react';

import LoginForm from '../Components/LoginForm'
import SignUpForm from '../Components/SignUpForm'

class LoginPage extends Component {

  render() {
    return (
      <div id='contentContainer'>
        {this.props.userExistsState ? <LoginForm logIn={this.props.logIn} userExistsState={this.props.userExistsState} userExistsCheck={this.props.userExistsCheck} /> : <SignUpForm logIn={this.props.logIn} userExistsCheck={this.props.userExistsCheck} userExistsState={this.props.userExistsState} />}
        {/* <LoginForm />
        <SignUpForm /> */}
      </div>
    )
  }
}

export default LoginPage
