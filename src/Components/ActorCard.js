import React, { Component } from 'react';

class ActorCard extends Component {
  // constructor(props) {
  //   super(props)
  // }

  render() {
    return (
      <div>
        {this.props.actor ? <img src={this.props.actor.img_url} alt='' /> : null }
        <h1>{this.props.actor ? this.props.actor.name : null}</h1>
        <p>CV: {this.props.actor ? this.props.actor.cv : null}</p>
      </div>
    )
  }
}

export default ActorCard;
