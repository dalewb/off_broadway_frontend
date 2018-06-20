import React, { Component } from 'react';

import ProductionCard from '../Components/ProductionCard';
import ProductionReview from './ProductionReview';
import { Card } from 'semantic-ui-react';

class MyProductions extends Component {

  state = {
    productionReview: null
  }

  renderProductionCards = () => {
    const cards = this.props.myProductions.map((production, index) => {
      return <ProductionCard production={production} key={index} onClickHandler={this.setProductionReview} />
    });
    return cards;
  };

  setProductionReview = (id) => {
    const productionReview = this.props.myProductions.find(prod => {
      return prod.script_id === id
    });
    this.setState({
      productionReview
    });
  };

  render() {
    const pCards = this.renderProductionCards();
    return (
      <React.Fragment>
        {this.state.productionReview ? <ProductionReview production={this.state.productionReview} /> : null}
        <Card.Group centered>
          {pCards}
        </Card.Group>
      </React.Fragment>
    )
  }
}

export default MyProductions;
