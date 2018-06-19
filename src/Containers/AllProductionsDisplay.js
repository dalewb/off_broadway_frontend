import React, { Component } from 'react';

import ProductionCard from '../Components/ProductionCard'

class AllProductionsDisplay extends Component {
  constructor(props) {
    super(props)
  }

  renderProductions = () => {
    return this.props.allProductions.map(production => {
      return 
    })
  }

  render() {
    return (
      <div>
        {this.props.allProductions.length > 0 ? this.renderProductions() : null}
      </div>
    )
  }
}

export default AllProductionsDisplay;
