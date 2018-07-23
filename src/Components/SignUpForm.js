import React, { Component } from 'react';
import { Button, Form } from 'semantic-ui-react'
// import handleChange from '../util';

import { NavLink } from 'react-router-dom';
import Headline2 from './Headline2';

class SignUpForm extends Component {
  constructor(props) {
    super(props)
    // this.handleChange = handleChange.bind(this);

    this.state = {
      username: '',
      password: '',
      passwordCheck: ''
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    e.persist();
    if (this.state.password === this.state.passwordCheck){
      fetch('https://mod-4-backend.herokuapp.com/api/v1/users', {
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
          localStorage.setItem('token', response.token);
          this.props.logIn();
        };
      });
    }else {
      alert('Warning: Passwords do not match!');
    }
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    return (
      <div id='signUpForm'>
        <Headline2 />
        <Form onSubmit={this.handleSubmit} >
          <Form.Field>
          <input placeholder='Username' type="text" name="username" value={this.state.username} onChange={this.handleChange} />
          </Form.Field>
          <Form.Field>
          <input placeholder='Password' type="password" name="password" value={this.state.password} onChange={this.handleChange} />
          </Form.Field>
          <Form.Field>
          <input placeholder='Confirm Password' type="password" name="passwordCheck" onChange={this.handleChange} />
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
