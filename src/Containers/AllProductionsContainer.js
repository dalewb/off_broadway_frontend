import React, { Component } from 'react';

import AllProductionsDisplay from './AllProductionsDisplay'
import SelectedProduction from './SelectedProduction'

class AllProductionsContainer extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <AllProductionsDisplay allProductions={this.props.allProductions}/>
    )
  }
}

export default AllProductionsContainer;
