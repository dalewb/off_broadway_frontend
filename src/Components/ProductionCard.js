import React, { Component } from 'react';
import { Card, Image } from 'semantic-ui-react';

class ProductionCard extends Component {
  // constructor(props) {
  //   super(props)

  // }

  renderProductionCard() {
    return (
      <Card>
        <Image src={this.props.production.script.img_url} alt='' />
        <Card.Content>
          <Card.Header>{this.props.production.script.title}</Card.Header>
          <Card.Description>Written by: {this.props.production.user.username}</Card.Description>
        </Card.Content>
      </Card>
    )
  }

  render() {
    return (
      this.renderProductionCard()
    )
  }
}

export default ProductionCard;
