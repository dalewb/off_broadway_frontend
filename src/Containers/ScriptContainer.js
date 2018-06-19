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

  createScript = (scriptInfo) => {
    this.setState({
      title: scriptInfo.title,
      line_1: `${scriptInfo.char1}-${scriptInfo.line1}`,
      line_2: `${scriptInfo.char2}-${scriptInfo.line2}`,
      line_3: `${scriptInfo.char3}-${scriptInfo.line3}`,
      line_4: `${scriptInfo.char4}-${scriptInfo.line4}`,
      line_5: `${scriptInfo.char5}-${scriptInfo.line5}`,
      user_id: `${scriptInfo.userId}`
    })
  }

  render() {
    return (
      <div>
        <LineCreation createScript={this.createScript} test={'test'} />
        <ScriptDisplay />
      </div>
    )
  }
}

export default ScriptContainer;
