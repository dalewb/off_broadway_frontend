import React, { Component } from 'react';

import ScriptDisplay from '../Components/ScriptDisplay'
import LineCreation from '../Components/LineCreation'

class ScriptContainer extends Component {
  constructor(props) {
    super(props)

    this.state = {
      title: '',
      line_1: '',
      line_2: '',
      line_3: '',
      line_4: '',
      line_5: '',
      user_id: '',
    }
  }

  render() {
    return (
      <div>
        <LineCreation createScript={this.props.createScript} test={'test'} />
        <ScriptDisplay />
      </div>
    )
  }
}

export default ScriptContainer;
