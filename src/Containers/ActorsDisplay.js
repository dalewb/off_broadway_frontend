import React, { Component } from 'react';

import ActorCard from '../Components/ActorCard'
import { Card, Icon, Image } from 'semantic-ui-react';

class AllActorsDisplay extends Component {
  // constructor(props) {
  //   super(props)
  // }

  renderActorCards = () => {
    const cards = this.props.actors.map((actor, index) => {
      return <ActorCard actor={actor} key={index} handleClick={this.props.handleClick}/>
    });
    return cards;
  };

  render() {
    const aCards = this.renderActorCards();
    return (
      <Card.Group>
        {aCards}
      </Card.Group>
    )
  }
}

export default AllActorsDisplay;
