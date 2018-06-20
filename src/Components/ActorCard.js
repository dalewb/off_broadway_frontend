import React, { Component } from 'react';

class ActorCard extends Component {
  // constructor(props) {
  //   super(props)
  // }

  handleActorClick = () => {
    this.props.handleClick(this.props.actor)
  }

  renderActor = () => {
    let actor = this.props.actor
    return (
<<<<<<< HEAD
      <div onClick={this.handleActorClick}>
=======
      <div onClick={() => this.props.handleClick(this.props.actor)} className='actor_card' >
        <img src={this.props.actor.img_url} alt='' />
>>>>>>> brie
        <p>Name: {this.props.actor.name}</p>
      </div>
    )
  }

  render() {
    return this.props.actor ? this.renderActor() : null;
  }
}

export default ActorCard;
