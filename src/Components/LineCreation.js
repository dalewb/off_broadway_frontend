import React, { Component } from 'react';

import LineInputForm from './LineInputForm'
// import handleChange from '../util';

class LineCreation extends Component {
  constructor(props) {
    super(props)

    this.state = {
      title: '',
      line1: '',
      line2: '',
      line3: '',
      line4: '',
      line5: '',
      char1: 'A',
      char2: 'A',
      char3: 'A',
      char4: 'A',
      char5: 'A',
      actor1: 'Actor 1',
      actor2: 'Actor 2',
      userId: 1,
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSelect = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.createScript(this.state)
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text"  name="title" placeholder='Play Title' onChange={this.handleChange}></input><br />
        <LineInputForm name="line1" char="char1" handleChange={this.handleChange} handleSelect={this.handleSelect}/><br />
        <LineInputForm name="line2" char="char2" handleChange={this.handleChange} handleSelect={this.handleSelect}/><br />
        <LineInputForm name="line3" char="char3" handleChange={this.handleChange} handleSelect={this.handleSelect}/><br />
        <LineInputForm name="line4" char="char4" handleChange={this.handleChange} handleSelect={this.handleSelect}/><br />
        <LineInputForm name="line5" char="char5" handleChange={this.handleChange} handleSelect={this.handleSelect}/><br />
        <input type="submit"></input>
      </form>
    )
  }
}

export default LineCreation;
