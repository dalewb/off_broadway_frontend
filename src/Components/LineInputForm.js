import React, { Component } from 'react';

class LineInput extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <React.Fragment>
        <textarea name={this.props.name} onChange={this.props.handleChange}/>
        <select onChange={this.props.handleSelect} name={this.props.char}>
          <option value="A" >Character A</option>
          <option value="B" >Character B</option>
        </select>
      </React.Fragment>
    )
  }
}

export default LineInput;
