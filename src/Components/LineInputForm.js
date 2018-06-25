import React, { Component } from 'react';
import { Form, Input } from 'semantic-ui-react';

class LineInput extends Component {

  render() {
    // console.log('what the hell is char???', this.props);
    // const options = [
    //   { key: 1, text: 'Character A', 'data-value': 'A', id: this.props.char},
    //   { key: 2, text: 'Character B', 'data-value': 'B', id: this.props.char}
    // ]
    return (
      <Form.Group >
        {/* <Form.Field
          control={Select}
          // label='Select Character'
          placeholder='Select Character'
          options={options}
          compact
          onChange={this.props.handleSelect}
          name={this.props.name}
          value={this.props.char}
        /> */}
        <select onChange={this.props.handleSelect} name={this.props.name}>
          <option>Choose a Character</option>
          <option value='A'>Character A</option>
          <option value='B'>Character B</option>
        </select>
        <Form.Field
          control={Input}
          // label='Enter Line'
          placeholder='Enter Line'
          name={this.props.name}
          onChange={this.props.handleChange}
          style={{ width: '500px' }}
          value={this.props.lineText}
        />
      </Form.Group>
    )
  }
}

export default LineInput;
