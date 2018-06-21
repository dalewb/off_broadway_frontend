import React, { Component } from 'react';

import AllProductionsDisplay from './AllProductionsDisplay'
// import SelectedProduction from './SelectedProduction'

class AllProductionsContainer extends Component {

  render() {
    return (
      <div id='productionDisplay'>
        <AllProductionsDisplay allProductions={this.props.allProductions} handleViewProductionClick={this.props.handleViewProductionClick}/>
        <div className='divider'></div>
      </div>
    )
  }
}

export default AllProductionsContainer;
