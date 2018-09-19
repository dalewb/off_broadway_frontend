import React, { Component } from 'react';

import ProductionCard from '../Components/ProductionCard';
import ProductionReview from './ProductionReview';

class MyProductions extends Component {

  state = {
    productionReview: null
  }

  renderProductionCards = () => {
    const cards = this.props.myProductions.map((production, index) => {
      // debugger
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

  resetProductionReview = () => {
    this.setState({
      productionReview: null
    })
  }

  render() {
    const pCards = this.renderProductionCards();
    return (
      <React.Fragment>
        {this.state.productionReview ? <ProductionReview production={this.state.productionReview} clickHandler={this.resetProductionReview} handleViewProductionClick={this.props.handleViewProductionClick} /> : null}
        <div className="ui five cards centered">
          {pCards}
        </div>
      </React.Fragment>
    )
  }
}

export default MyProductions;
