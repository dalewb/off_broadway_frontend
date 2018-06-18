import React, { Component } from 'react';

import CharactersDisplay from './CharactersDisplay'
import SelectedCharacters from './SelectedCharacters'

class CreateContainer extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <SelectedCharacters />
        <CharactersDisplay />
      </div>
    )
  }
}

export default CreateContainer;
