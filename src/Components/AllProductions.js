import React, { Component } from 'react';

import ProductionCard from '../Components/ProductionCard';
import ProductionReview from '../Components/ProductionReview';
import { API_URL } from '../util';

class AllProductions extends Component {
  state = {
    productions: [],
    productionReview: null
  }

  componentDidMount() {
    this.fetchProductionData();
  };

  fetchProductionData = () => {
    fetch(API_URL + 'productions', {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem('token')
      }
    }).then(response => response.json()).then(productions => {
      if (this.props.type === 'myProductions'){
        productions.forEach(prod => {
          if (prod.user_id === parseInt(localStorage.getItem('user_id'), 10)){
            this.setState({
              productions: [...this.state.productions, prod]
            });
          }
        });
      }else{
        this.setState({
          productions
        });
      }
    });
  };

  renderProductionCards = () => {
    const cards = this.state.productions.map((production, index) => {
      return <ProductionCard production={production} key={index} onClickHandler={this.setProductionReview} />
    });
    return cards;
  };

  setProductionReview = (id) => {
    const productionReview = this.state.productions.find(prod => {
      return prod.script_id === id
    });
    this.setState({
      productionReview
    });
  };

  render() {
    const pCards = this.renderProductionCards();
    return (
      <div id='productionDisplay'>
        <div className="ui three cards centered">
          {this.state.productionReview ? <ProductionReview production={this.state.productionReview} handleViewProductionClick={() => this.props.handleViewProductionClick(this.state.productionReview.id)} /> : null}
        </div>
        <div className="ui five cards centered">
          {pCards}
        </div>
        <div className='divider'></div>
      </div>
    )
  }
}

export default AllProductions;
