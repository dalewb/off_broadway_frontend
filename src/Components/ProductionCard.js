import React, { Component } from 'react';
import { Card, Image } from 'semantic-ui-react';

class ProductionCard extends Component {

  renderProductionCard() {

    if (this.props.production) {
      return (
        <Card onClick={() => this.props.onClickHandler(this.props.production.script_id)}>
          <Image src={this.props.production ? this.props.production.script.img_url : null} alt='' />
          <div>
            <span className='cardTitle'>{this.props.production.script.title}</span>
            <span className='cardCopy'>Written by: {this.props.production.user.username}</span>
          </div>
        </Card>
      )
    } else {
      return null
    }
  }

  render() {
    return (
      this.renderProductionCard()
    )
  }
}

export default ProductionCard;
