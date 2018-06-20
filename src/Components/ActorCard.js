import React, { Component } from 'react';

import { Card, Icon, Image } from 'semantic-ui-react';

class ActorCard extends Component {
  // constructor(props) {
  //   super(props)
  // }

  renderActor = () => {
    return (
<<<<<<< HEAD
      <div onClick={() => this.props.handleClick(this.props.actor)} className='actor_card' >
        <img src={this.props.actor.img_url} alt='' />
        <p>Name: {this.props.actor.name}</p>
      </div>
=======
      <Card onClick={() => this.props.handleClick(this.props.actor)} >
        <Image src={this.props.actor.img_url} />
        <Card.Content>
          <Card.Header>{this.props.actor.name}</Card.Header>
        </Card.Content>
      </Card>
>>>>>>> brie
    )
  }

  render() {
    return this.props.actor ? this.renderActor() : null;
  }
}

export default ActorCard;
