import React, { Component } from 'react';

class ActorCard extends Component {
  constructor(props) {
    super(props)

  }

  handleActorClick() {
    this.props.handleClick(this.props.actor)
  }

  renderActor = () => {
    let actor = this.props.actor
    return (
      <div onClick={this.handleActorClick}>
        <p>Name: {this.props.actor.name}</p>
        <img src={this.props.actor.img_url} />
      </div>
    )
  }

  render() {
    return this.props.actor ? this.renderActor() : null;
  }
}

export default ActorCard;
