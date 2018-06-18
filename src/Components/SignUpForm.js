import React, { Component } from 'react';
import handleChange from '../util';

class SignUpForm extends Component {
  constructor(props) {
    super(props)
    this.handleChange = handleChange.bind(this);

    this.state = {
      username: '',
      password: '',
      passwordCheck: '',
    }
  }

  handleSubmit = (e) => {
    e.preventDefault()
    console.log('Sign Up Submit', this.state)
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" name="username" onChange={this.handleChange}></input>
        <input type="password" name="password" onChange={this.handleChange}></input>
        <input type="password" name="passwordCheck" onChange={this.handleChange}></input>
        <input type="submit" name="Submit"></input>
      </form>
    )
  }
}

export default SignUpForm;
