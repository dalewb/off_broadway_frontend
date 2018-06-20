import React, { Component } from 'react';
import { Form, Input, Select } from 'semantic-ui-react';

class LineInput extends Component {

  render() {
    const options = [
      { key: 1, text: "Character A", value: "A" },
      { key: 2, text: "Character B", value: "B" },
    ]
    return (
      <Form>
        <Form.Group centered>
          <Form.Field
            control={Select}
            label="Select Character"
            placeholder="Select Character"
            options={options}
            compact
            onChange={this.props.handleSelect}
            name={this.props.char}
          />
          <Form.Field
            control={Input}
            label="Enter Line"
            placeholder="Enter Line"
            name={this.props.name}
            onChange={this.props.handleChange}
            style={{width: "500px"}}
          />
        </Form.Group>
      </Form>
    )
  }
}

export default LineInput;
