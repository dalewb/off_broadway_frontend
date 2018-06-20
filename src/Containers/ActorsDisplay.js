import React, { Component } from 'react';

import ActorCard from '../Components/ActorCard'

class AllActorsDisplay extends Component {
  constructor(props) {
    super(props)
  }

  renderActorCards = () => {
    const cards = this.props.actors.map((actor, index) => {
      return <ActorCard actor={actor} key={index} handleClick={this.props.handleClick}/>
    });
    return cards;
  };

  render() {
    const aCards = this.renderActorCards();
    return (
      <React.Fragment>
        {aCards}
      </React.Fragment>
    )
  }
}

export default AllActorsDisplay;
