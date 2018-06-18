import React, { Component } from 'react';

import ScriptDisplay from './ScriptDisplay'
import LineCreation from './LineCreation'

class ScriptContainer extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <LineCreation />
        <ScriptDisplay />
      </div>
    )
  }
}

export default ScriptContainer;
