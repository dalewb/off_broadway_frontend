import React, { Component } from 'react';

import ActorsDisplay from './ActorsDisplay'
import SelectedActors from './SelectedActors'
import ScriptContainer from './ScriptContainer'

class CreateContainer extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <SelectedActors />
        <ActorsDisplay />
        <ScriptContainer />
      </div>
    )
  }
}

export default CreateContainer;
