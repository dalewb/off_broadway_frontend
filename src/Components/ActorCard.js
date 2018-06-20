import React, { Component } from 'react';

import { Card, Icon, Image } from 'semantic-ui-react';

class ActorCard extends Component {
  // constructor(props) {
  //   super(props)
  // }

  renderActor = () => {
    return (
      <Card onClick={() => this.props.handleClick(this.props.actor)} >
        <Image src={this.props.actor.img_url} />
        <Card.Content>
          <Card.Header>{this.props.actor.name}</Card.Header>
        </Card.Content>
      </Card>
    )
  }

  render() {
    return this.props.actor ? this.renderActor() : null;
  }
}

export default ActorCard;
