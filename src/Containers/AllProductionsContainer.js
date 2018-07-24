import React, { Component } from 'react';

// import AllProductionsDisplay from './AllProductionsDisplay'
import ProductionCard from '../Components/ProductionCard';
import ProductionReview from '../Components/ProductionReview';

const URL = 'https://mod-4-backend.herokuapp.com/api/v1/'

class AllProductionsContainer extends Component {
  state = {
    productions: [],
    productionReview: null
  }

  componentDidMount() {
    this.fetchProductionData();
  };

  fetchProductionData = () => {
    fetch(URL + 'productions', {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem('token')
      }
    }).then(response => response.json()).then(productions => {
      this.setState({
        productions
      });
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
        {/* <AllProductionsDisplay allProductions={this.state.productions} handleViewProductionClick={this.props.handleViewProductionClick}/> */}
        <div className='divider'></div>
      </div>
    )
  }
}

export default AllProductionsContainer;
