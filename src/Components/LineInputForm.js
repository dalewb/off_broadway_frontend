import React, { Component } from 'react';
import { Form, Input, Select } from 'semantic-ui-react';

class LineInput extends Component {

  render() {
    const options = [
      { key: 1, text: "Character A", value: "A", name: this.props.char, id: this.props.char },
      { key: 2, text: "Character B", value: "B", name: this.props.char, id: this.props.char }
    ]
    return (
      <Form.Group >
        <Form.Field
          control={Select}
          placeholder="Select Character"
          options={options}
          compact
          onChange={this.props.handleSelect}
          // name={this.props.char}
          // value={this.props.char}
        />
        <Form.Field
          control={Input}
          placeholder="Enter Line"
          name={this.props.name}
          onChange={this.props.handleChange}
          style={{ width: "500px" }}
          value={this.props.lineText}
        />
      </Form.Group>
    )
  }
}

export default LineInput;
