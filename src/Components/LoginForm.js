import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Button, Form } from 'semantic-ui-react';

import Headline2 from './Headline2';
import { handleChange, URL } from '../util';

class LoginForm extends Component {

  state = {
    username: '',
    password: '',
  }

  onSubmit = (e) => {
    e.preventDefault();
    if (this.state.username && this.state.password){
      fetch(URL + 'sessions', {
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
          localStorage.setItem('username', response.user.username);
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
            <input placeholder='Username' type='text' name='username' onChange={handleChange.bind(this)}></input><br />
          </Form.Field>
          <Form.Field>
            <input placeholder='Password' type='password' name='password' onChange={handleChange.bind(this)}></input><br />
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
