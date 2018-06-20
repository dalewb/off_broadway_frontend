import React, { Component } from 'react';

class ActorCard extends Component {
  // constructor(props) {
  //   super(props)
  // }

  handleActorClick = (props) => {
    props.handleClick(props.actor)
  }

  renderActor = () => {
    return (
<<<<<<< HEAD
      <div onClick={this.props.handleClick} className='actor_card' >
=======
      <div onClick={this.handleActorClick} className='actor_card' >
>>>>>>> brie
        <img src={this.props.actor.img_url} alt='' />
        <p>Name: {this.props.actor.name}</p>
      </div>
    )
  }

  render() {
    return this.props.actor ? this.renderActor() : null;
  }
}

export default ActorCard;
