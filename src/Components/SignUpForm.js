import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Button, Form } from 'semantic-ui-react'

import Headline2 from './Headline2';
import { API_URL, handleChange } from '../util';

class SignUpForm extends Component {
  state = {
    username: '',
    password: '',
    passwordCheck: ''
  }

  handleSubmit = (e) => {
    e.preventDefault();
    e.persist();
    if (this.state.password === this.state.passwordCheck){
      fetch(API_URL + 'users', {
        method: 'POST',
        body: JSON.stringify({username: this.state.username, password: this.state.password}),
        headers: {'Content-Type': 'application/json'}
      })
      .then( res => res.json() )
      .then( response => {
        if (response.errors || response.error){
          alert(response.errors);
        }else{
          localStorage.setItem('user_id', response.user.id);
          localStorage.setItem('username', response.user.username);
          localStorage.setItem('token', response.token);
          this.props.logIn();
        };
      });
    }else {
      alert('Warning: Passwords do not match!');
    }
  };

  render() {
    return (
      <div id='signUpForm'>
        <Headline2 />
        <Form onSubmit={this.handleSubmit} >
          <Form.Field>
          <input placeholder='Username' type="text" name="username" value={this.state.username} onChange={handleChange.bind(this)} />
          </Form.Field>
          <Form.Field>
          <input placeholder='Password' type="password" name="password" value={this.state.password} onChange={handleChange.bind(this)} />
          </Form.Field>
          <Form.Field>
          <input placeholder='Confirm Password' type="password" name="passwordCheck" onChange={handleChange.bind(this)} />
          </Form.Field>
          <Button type="submit">Submit</Button>
        </Form>
        <p>&nbsp;</p>
        <NavLink to="/" >Already have an account? Log In</NavLink>
      </div>
    );
  };
};

export default SignUpForm;
