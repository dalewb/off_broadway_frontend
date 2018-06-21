import React, { Component } from 'react';

import LineInputForm from './LineInputForm'
import { Form, Input } from 'semantic-ui-react'
const coolstory = require('coolstory.js');
// import handleChange from '../util';

function randy() {
  return Math.floor(Math.random() * 5) + 1
}

const filler = { userId: randy(), title: coolstory.title(), line_1: 'What do you remember about your mother?', line_2: 'I never meant to come between you and him.', line_3: 'Why did you scream like that?', line_4: 'Somehow we need to persuade him to part with a million dollars.', line_5: 'Try focussing more on your life and less on mine!', char1: 'A', char2: 'B', char3: 'A', char4: 'B', char5: 'A', img_url: 'https://i.pinimg.com/custom_covers/200x150/401101979251643329_1349568428.jpg'}

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
      userId: null
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
      this.props.storeScriptState(this.state);
    };
  };

  checkProject = () => {
    if (this.state.title === null || this.state.title === '' || this.state.title === ' '){
      alert('Script must have a valid title!');
      return false
    }else return true ;
  };

  quickFiller = () => {
    this.setState({
      title: filler.title,
      line1: filler.line_1,
      line2: filler.line_2,
      line3: filler.line_3,
      line4: filler.line_4,
      line5: filler.line_5,
      char1: filler.char1,
      char2: filler.char2,
      char3: filler.char3,
      char4: filler.char4,
      char5: filler.char5,
      userId: filler.userId
    }, () => console.log('quickFiller state:', this.state));
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Input type="text" name="title" placeholder='Play Title' onChange={this.handleChange} /><br /><br />
        <LineInputForm name="line1" char="char1" handleChange={this.handleChange} handleSelect={this.handleSelect}/><br />
        <LineInputForm name="line2" char="char2" handleChange={this.handleChange} handleSelect={this.handleSelect}/><br />
        <LineInputForm name="line3" char="char3" handleChange={this.handleChange} handleSelect={this.handleSelect}/><br />
        <LineInputForm name="line4" char="char4" handleChange={this.handleChange} handleSelect={this.handleSelect}/><br />
        <LineInputForm name="line5" char="char5" handleChange={this.handleChange} handleSelect={this.handleSelect}/>
        <div className='spacer'></div>
        <p>
          <button type='submit'>Next Step ></button>
        </p>
        <p onClick={this.quickFiller}>Q</p>
      </Form>
    )
  }
}

export default LineCreation;
