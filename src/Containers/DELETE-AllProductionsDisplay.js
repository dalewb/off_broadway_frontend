import React, { Component } from 'react';

import ProductionCard from '../Components/ProductionCard';
import ProductionReview from '../Components/ProductionReview';

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
      <React.Fragment>
        <div className="ui three cards centered">
          {this.state.productionReview ? <ProductionReview production={this.state.productionReview} handleViewProductionClick={() => this.props.handleViewProductionClick(this.state.productionReview.id)} /> : null}
        </div>
        <div className="ui five cards centered">
          {pCards}
        </div>
      </React.Fragment>
    )
  }
}

export default AllProductionsDisplay;
