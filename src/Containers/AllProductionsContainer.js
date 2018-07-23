import React, { Component } from 'react';

import AllProductionsDisplay from './AllProductionsDisplay'

const URL = 'https://mod-4-backend.herokuapp.com/api/v1/'

class AllProductionsContainer extends Component {
  state = {
    productions: []
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

  render() {
    return (
      <div id='productionDisplay'>
        <AllProductionsDisplay allProductions={this.state.productions} handleViewProductionClick={this.props.handleViewProductionClick}/>
        <div className='divider'></div>
      </div>
    )
  }
}

export default AllProductionsContainer;
