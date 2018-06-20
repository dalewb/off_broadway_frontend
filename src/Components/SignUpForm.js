import React, { Component } from 'react';
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
        <form onSubmit={this.props.logIn} /* onSubmit={this.handleSubmit} */ >
          Sign-up Form
          <input type="text" name="username" value={this.state.username} onChange={this.handleChange} /><br />
          <input type="password" name="password" value={this.state.password} onChange={this.handleChange} /><br />
          <input type="password" name="passwordCheck" onChange={this.handleChange} /><br />
          <input type="submit" name="Submit"></input>
        </form>
        <p>
          <button onClick={this.props.userExistsCheck} >Already have an account? Log In</button>
        </p>
      </div>
    );
  };
};

export default SignUpForm;
