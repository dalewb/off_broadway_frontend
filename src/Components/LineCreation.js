import React, { Component } from 'react';

import LineInputForm from './LineInputForm';
import { Form, Input } from 'semantic-ui-react';
import { handleChange } from '../util';

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
      char1: '',
      char2: '',
      char3: '',
      char4: '',
      char5: '',
      img_url: ''
    };
  };

  handleSelect = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  handleSubmit = (e) => {
    e.preventDefault()
    if (this.validateForm()){
      this.props.storeScriptState(this.state);
    };
  };

  validateForm = () => {
    if (this.state.title === null || this.state.title === '' || this.state.title === ' ' || this.state.line_1 === '' || this.state.line_2 === '' || this.state.line_3 === '' || this.state.line_4 === '' || this.state.line_5 === ''){
      alert('Form incomplete!');
      return false
    }else return true ;
  };

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Input type='text' name='title' placeholder='Play Title' onChange={handleChange.bind(this)}  value={this.state.title}/><br /><br />

        <LineInputForm name='line1' handleChange={handleChange.bind(this)} handleSelect={this.handleSelect} lineText={this.state.line1} char={'char1'}/><br />
        <LineInputForm name='line2' handleChange={handleChange.bind(this)} handleSelect={this.handleSelect} lineText={this.state.line2} char={'char2'}/><br />
        <LineInputForm name='line3' handleChange={handleChange.bind(this)} handleSelect={this.handleSelect} lineText={this.state.line3} char={'char3'}/><br />
        <LineInputForm name='line4' handleChange={handleChange.bind(this)} handleSelect={this.handleSelect} lineText={this.state.line4} char={'char4'}/><br />
        <LineInputForm name='line5' handleChange={handleChange.bind(this)} handleSelect={this.handleSelect} lineText={this.state.line5} char={'char5'}/>

        <Form.Field control={Input} placeholder='Image URL' name='img_url' onChange={handleChange.bind(this)} style={{ width: '100%' }} value={this.state.img_url} />
        <div className='spacer'></div>
        <p>
          <button type='submit'>Next Step ></button>
        </p>
      </Form>
    )
  }
}

export default LineCreation;
