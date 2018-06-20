import React, { Component } from 'react';
import handleChange from '../util';
import { Button, Checkbox, Form } from 'semantic-ui-react'

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
        <Form onSubmit={this.props.logIn} /*onSubmit={this.onSubmit} */ >
          <h2>Log In Form</h2>
          <Form.Field>
            <label>Username</label>
            <input placeholder='Username' type='text' name='username' onChange={this.handleChange}></input><br />
          </Form.Field>
          <Form.Field>
            <label>Password</label>
            <input placeholder='Password' type='password' name='password' onChange={this.handleChange}></input><br />
          </Form.Field>
          <Form.Field>
            <Button type='submit'>Submit</Button>
          </Form.Field>
        </Form>
        <Button onClick={this.props.userExistsCheck} >Sign Up</Button>
      </div>
    )
  }
}

export default LoginForm;
