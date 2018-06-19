import React, { Component } from 'react';

import ActorsDisplay from './ActorsDisplay'
import SelectedActors from './SelectedActors'

class CreateContainer extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <SelectedActors />
        <ActorsDisplay />
      </div>
    )
  }
}

export default CreateContainer;
