import React, { Component } from 'react';

import ActorCard from '../Components/ActorCard'

class AllActorsDisplay extends Component {

  renderActorCards = () => {
    const cards = this.props.actors.map((actor, index) => {
      return <ActorCard actor={actor} key={index} handleClick={this.props.handleClick}/>
    });
    return cards;
  };

  render() {
    const aCards = this.renderActorCards();
    return (
      <div className="ui five cards centered">
        {aCards}
        <div className='divider'></div>
        <p>&nbsp;</p>
        <p>
          <button>Submit Project</button>
        </p>
      </div>
    )
  }
}

export default AllActorsDisplay;
