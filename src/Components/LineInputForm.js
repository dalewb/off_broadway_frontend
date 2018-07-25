import React from 'react';
import { Form, Input } from 'semantic-ui-react';

const LineInput = (props) => (
  <Form.Group >
    <select defaultValue='Select Character' onChange={props.handleSelect} id={props.char}>
      <option value='Select Character' disabled>Select Character</option>
      <option value='A'>Character A</option>
      <option value='B'>Character B</option>
    </select>
    <Form.Field
      control={Input}
      placeholder="Enter Line"
      name={props.name}
      onChange={props.handleChange}
      style={{ width: "500px" }}
      value={props.lineText}
    />
  </Form.Group>
)

export default LineInput;
