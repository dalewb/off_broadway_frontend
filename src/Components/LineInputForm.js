import React, { Component } from 'react';
import { Form, Input } from 'semantic-ui-react';

class LineInput extends Component {

  render() {
    return (
      <Form.Group >
        <select defaultValue='Select Character' onChange={this.props.handleSelect} id={this.props.char}>
          <option value='Select Character' disabled>Select Character</option>
          <option value='A'>Character A</option>
          <option value='B'>Character B</option>
        </select>
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
