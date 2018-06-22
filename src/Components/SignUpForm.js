import React, { Component } from 'react';
import { Button, Form } from 'semantic-ui-react'
// import handleChange from '../util';

import { NavLink } from 'react-router-dom';
import Headline from './Headline';

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
    console.log('Sign Up Submit', this.state);
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    return (
      <div id='signUpForm'>
        <Headline />
        <Form onSubmit={this.props.logIn} /* onSubmit={this.handleSubmit} */ >
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
