import React, { Component } from 'react';

import ProductionCard from '../Components/ProductionCard';

class MyProductions extends Component {

  renderProductionCards = () => {
    const cards = this.props.myProductions.map((production, index) => {
      return <ProductionCard production={production} key={index} onClickHandler={this.setProductionReview} />
    });
    return cards;
  };

  render() {
    const pCards = this.renderProductionCards();
    return (
      <React.Fragment>
        {pCards}
      </React.Fragment>
    )
  }
}

export default MyProductions;
