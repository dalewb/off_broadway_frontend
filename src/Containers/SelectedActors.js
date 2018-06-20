import React, { Component } from 'react';

import ActorCard from '../Components/ActorCard'
import { Card } from 'semantic-ui-react';

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
      <Card.Group centered >
        {this.renderActors()}
      </Card.Group>
    )
  }
}

export default SelectedActors;
