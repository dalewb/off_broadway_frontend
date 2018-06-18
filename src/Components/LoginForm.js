import React, { Component } from 'react';
import handleChange from '../util';

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
      <div>
        <form onSubmit={this.onSubmit}>
          <input type='text' name='username' onChange={this.handleChange}></input>
          <input type='password' name='password' onChange={this.handleChange}></input>
          <input type='submit' value='Submit'></input>
        </form>
      </div>
    )
  }
}

export default LoginForm;
