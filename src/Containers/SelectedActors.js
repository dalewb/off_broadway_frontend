import React, { Component } from 'react';

import ActorCard from '../Components/ActorCard'

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
<<<<<<< HEAD
      <div>
        <h4>2. Select two (2) actors:</h4>
        <div className="ui five cards centered">
          {this.renderActors()}
=======
      <div className="ui segment gray selected">
        <div className="ui five column grid">
          <div className="row selected-row">
            <Card.Group centered >
              {this.renderActors()}
            </Card.Group>
          </div>
>>>>>>> dalewb
        </div>
      </div>
    )
  }
}

export default SelectedActors;
