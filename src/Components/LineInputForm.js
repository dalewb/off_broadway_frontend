import React, { Component } from 'react';

import handleChange from '../util';

class LineInput extends Component {
  constructor(props) {
    super(props)
    this.handleChange = handleChange.bind(this);
  }
  render() {
    return (
      <form>
        <input type="textarea" name="line" onChange={this.handleChange}></input>
        <input type="submit"></input>
      </form>
    )
  }
}

export default LineInput;
