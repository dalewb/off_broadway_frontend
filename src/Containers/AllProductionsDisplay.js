import React, { Component } from 'react';

import ProductionCard from '../Components/ProductionCard';
import ProductionReview from '../Components/ProductionReview';
import { Card } from 'semantic-ui-react'

class AllProductionsDisplay extends Component {

  state = {
    productionReview: null
  }

  renderProductionCards = () => {
    const cards = this.props.allProductions.map((production, index) => {
      return <ProductionCard production={production} key={index} onClickHandler={this.setProductionReview} />
    });
    return cards;
  };

  setProductionReview = (id) => {
    const productionReview = this.props.allProductions.find(prod => {
      return prod.script_id === id
    });
    this.setState({
      productionReview
    });
  };

  render() {
    const pCards = this.renderProductionCards();
    return (
      <div className="ui four column grid">
        <div className="row">
          {this.state.productionReview ? <ProductionReview production={this.state.productionReview} handleViewProductionClick={this.props.handleViewProductionClick}/> : null}
          <Card.Group centered>
            {pCards}
          </Card.Group>
        </div>
      </div>
    )
  }
}

export default AllProductionsDisplay;
