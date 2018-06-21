import React, { Component } from 'react';
import { Form, Input, Select } from 'semantic-ui-react';

class LineInput extends Component {

  render() {
    const options = [
      { key: 1, text: "Select Character", value: "" },
      { key: 2, text: "Character A", value: "A" },
      { key: 3, text: "Character B", value: "B" },
    ]
    return (
      <React.Fragment>
        <select onChange={this.props.handleSelect} name={this.props.char}>
          <option value="" >Select Character</option>
          <option value="A" >Character A</option>
          <option value="B" >Character B</option>
        </select>
        <textarea name={this.props.name} onChange={this.props.handleChange} />
      </React.Fragment>
    )
  }
}

export default LineInput;
