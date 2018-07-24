import React, { Component } from 'react';
import { handleChange } from '../util';
import { Button, Form } from 'semantic-ui-react'

import { NavLink } from 'react-router-dom';
import Headline2 from './Headline2';

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
    e.preventDefault();
    if (this.state.username && this.state.password){
      fetch('https://mod-4-backend.herokuapp.com/sessions', {
        method: 'POST',
        body: JSON.stringify(this.state),
        headers: {
          'Content-Type': 'application/json'
        }
      }).then( res => res.json() )
      .then( response => {
        if (response.errors || response.error){
          alert(response.errors);
        }else{
          localStorage.setItem('user_id', response.user.id);
          localStorage.setItem('token', response.token);
          this.props.logIn();
        }
      });
    }else{
      alert('Warning: Username/Password Missing!');
    }
  }

  render() {
    return (
      <div id='loginForm'>
        <Form onSubmit={this.onSubmit} >
          <Headline2 />
          <Form.Field>
            <input placeholder='Username' type='text' name='username' onChange={this.handleChange}></input><br />
          </Form.Field>
          <Form.Field>
            <input placeholder='Password' type='password' name='password' onChange={this.handleChange}></input><br />
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
