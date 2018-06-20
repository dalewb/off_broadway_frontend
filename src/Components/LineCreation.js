import React, { Component } from 'react';

import LineInputForm from './LineInputForm'
import { Form, Input, Button } from 'semantic-ui-react'
// import handleChange from '../util';

class LineCreation extends Component {
  constructor(props) {
    super(props)

    this.state = {
      title: null,
      line1: null,
      line2: null,
      line3: null,
      line4: null,
      line5: null,
      char1: null,
      char2: null,
      char3: null,
      char4: null,
      char5: null,
      userId: 1
    };
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSelect = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = (e) => {
    e.preventDefault()
    if (this.checkProject()){
      this.props.createScript(this.state);
    };
  };

  checkProject = () => {
    if (this.state.title === null || this.state.title === '' || this.state.title === ' '){
      alert('Script must have a valid title!');
      return false
    }else return true ;
  };

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Input type="text"  name="title" placeholder='Play Title' onChange={this.handleChange} />
        <LineInputForm name="line1" char="char1" handleChange={this.handleChange} handleSelect={this.handleSelect}/>
        <LineInputForm name="line2" char="char2" handleChange={this.handleChange} handleSelect={this.handleSelect}/>
        <LineInputForm name="line3" char="char3" handleChange={this.handleChange} handleSelect={this.handleSelect}/>
        <LineInputForm name="line4" char="char4" handleChange={this.handleChange} handleSelect={this.handleSelect}/>
        <LineInputForm name="line5" char="char5" handleChange={this.handleChange} handleSelect={this.handleSelect}/>
        <Button type="submit">Submit</Button>
      </Form>
    )
  }
}

export default LineCreation;
