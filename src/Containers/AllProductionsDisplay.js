import React, { Component } from 'react';

import ProductionCard from '../Components/ProductionCard'

// const URL = 'https://mod-4-backend.herokuapp.com/api/v1/'
// const URL = 'http://localhost:3000/api/v1/'

class AllProductionsDisplay extends Component {
  // constructor(props) {
  //   super(props);
    // this.state = {
    //   users: [],
    //   productions: [],
    //   characters: [],
    //   scripts: []
    // };
    // this.fetchProductionData();
  // };

  // fetchProductionData = () => {
  //   fetch(URL + 'productions').then(response => response.json()).then(productions => {
  //     this.setState({
  //       productions
  //     });
  //   });
  // };

  renderProductionCards = () => {
    const cards = this.props.allProductions.map((production, index) => {
      return <ProductionCard production={production} key={index} />
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

export default AllProductionsDisplay;
