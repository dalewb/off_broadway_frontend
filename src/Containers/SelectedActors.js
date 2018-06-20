import React, { Component } from 'react';

import ActorCard from '../Components/ActorCard'

class SelectedActors extends Component {
  // constructor(props) {
  //   super(props)
  // }

renderActors = () => {

  return this.props.myActors.map((actor, index) => {
    return <ActorCard
      actor={actor}
      key={index}
      handleClick={() => {this.props.removeChosenActor(actor)}}
    />
  })
}

  render() {
    return (
      this.renderActors()
    )
  }
}

export default SelectedActors;
