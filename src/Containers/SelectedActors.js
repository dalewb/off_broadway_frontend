import React, { Component } from 'react';

import ActorCard from '../Components/ActorCard'
import { Card } from 'semantic-ui-react'

class SelectedActors extends Component {

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
      <div className="ui segment gray selected">
        <div className="ui five column grid">
          <div className="row selected-row">
            <h4>2. Select two (2) actors:</h4>
            <Card.Group centered >
              {this.renderActors()}
            </Card.Group>
          </div>
        </div>
      </div>
    )
  }
}

export default SelectedActors;
