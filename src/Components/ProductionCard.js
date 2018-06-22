import React, { Component } from 'react';
import { Card, Image } from 'semantic-ui-react';

class ProductionCard extends Component {

  renderProductionCard() {
    return (
      <Card onClick={() => this.props.onClickHandler(this.props.production.script_id)}>
        <Image src={this.props.production.script.img_url} alt='' />
        <div>
          <span className='cardTitle'>{this.props.production.script.title}</span>
          <span className='cardCopy'>Written by: {this.props.production.user.username}</span>
        </div>
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
