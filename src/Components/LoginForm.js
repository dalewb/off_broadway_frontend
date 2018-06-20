import React, { Component } from 'react';
import handleChange from '../util';

import { NavLink } from 'react-router-dom';

class LoginForm extends Component {
  constructor(props) {
    super(props)
    this.handleChange = handleChange.bind(this);

    this.state = {
      username: '',
      password: '',
    }
  }

  onSubmit = (e) => {
    e.preventDefault()
    // fetch to backend for username to verify password
  }

  render() {
    return (
      <div id='loginForm'>
        <h1>Login Form Div</h1>
        <form onSubmit={this.props.logIn} /*onSubmit={this.onSubmit} */ >
        Log In Form
          <input type='text' name='username' onChange={this.handleChange}></input><br />
          <input type='password' name='password' onChange={this.handleChange}></input><br />
          <input type='submit' value='Submit'></input>
        </form>
        <p>
        <NavLink to="/sign_up" >Sign Up</NavLink>
          
        </p>
      </div>
    )
  }
}

export default LoginForm;
