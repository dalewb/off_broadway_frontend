import React, { Component } from 'react';

import ProductionCard from '../Components/ProductionCard';
import ProductionReview from './ProductionReview';

const URL = 'https://mod-4-backend.herokuapp.com/api/v1/'

class MyProductions extends Component {

  state = {
    productionReview: null,
    myProductions: []
  }

  componentDidMount() {
    this.fetchProductionData();
  };

  fetchProductionData = () => {
    fetch(URL + 'productions',{
      headers: {
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem('token')
      }
    }).then(response => response.json()).then(productions => {
      productions.forEach(prod => {
        if (prod.user_id === parseInt(localStorage.getItem('user_id'), 10)){
          this.setState({
            myProductions: [...this.state.myProductions, prod]
          });
        }
      });
    });
  };

  renderProductionCards = () => {
    const cards = this.state.myProductions.map((production, index) => {
      return <ProductionCard production={production} key={index} onClickHandler={this.setProductionReview} />
    });
    return cards;
  };

  setProductionReview = (id) => {
    const productionReview = this.state.myProductions.find(prod => {
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
