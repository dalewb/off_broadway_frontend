import React, { Component } from 'react';

class LineInput extends Component {

  render() {
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
