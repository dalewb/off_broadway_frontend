import React, { Component } from 'react';

import CharacterCard from '../Components/CharacterCard'

class AllCharactersDisplay extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <CharacterCard />
    )
  }
}

export default AllCharactersDisplay;
