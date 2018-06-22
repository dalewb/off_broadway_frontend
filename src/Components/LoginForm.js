import React, { Component } from 'react';
import handleChange from '../util';
import { Button, Form } from 'semantic-ui-react'

import { NavLink } from 'react-router-dom';
import Headline from './Headline';

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

  test = (e) => {
    console.log(e.target.value);
  }

  render() {
    return (
      <div id='loginForm'>
        <Form onSubmit={this.props.logIn} /*onSubmit={this.onSubmit} */ >
          <Headline />
          <Form.Field>
            <label>Username</label>
            <input placeholder='Username' type='text' name='username' onChange={this.props.setUserInfo}></input><br />
          </Form.Field>
          <Form.Field>
            <label>Password</label>
            <input placeholder='Password' type='password' name='password' onChange={this.props.setUserInfo}></input><br />
          </Form.Field>
          <Form.Field>
            <Button type='submit'>Submit</Button>
          </Form.Field>
        </Form>
        <p>&nbsp;</p>
        <NavLink to="/sign_up" >Sign Up</NavLink>
      </div>
    )
  }
}

export default LoginForm;
