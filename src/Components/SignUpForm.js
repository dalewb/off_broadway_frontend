import React, { Component } from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react'
// import handleChange from '../util';

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
        <h1>Sign Up Form Div</h1>
        <Form onSubmit={this.props.logIn} /* onSubmit={this.handleSubmit} */ >
          Sign-up Form
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
        <p>
          <Button onClick={this.props.userExistsCheck} >Already have an account? Log In</Button>
        </p>
      </div>
    );
  };
};

export default SignUpForm;
