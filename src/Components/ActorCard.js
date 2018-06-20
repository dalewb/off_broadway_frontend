import React, { Component } from 'react';

class ActorCard extends Component {
  // constructor(props) {
  //   super(props)
  // }

  renderActor = () => {
    return (
      <div onClick={() => this.props.handleClick(this.props.actor)} className='actor_card' >
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
