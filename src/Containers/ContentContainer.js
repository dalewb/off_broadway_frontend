import React, { Component } from 'react';

import AllProductionsContainer from './AllProductionsContainer';
import CreateContainer from './CreateContainer';
import MyProductions from '../Components/MyProductions';

// const URL = 'https://mod-4-backend.herokuapp.com/api/v1/'
const URL = 'http://localhost:3000/api/v1/'

class ContentContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productions: [],
      myProductions: []
    };
  };

  componentDidMount() {
    this.fetchProductionData();
    this.fetchActorData();
  };

  fetchProductionData = () => {
    fetch(URL + 'productions').then(response => response.json()).then(productions => {
      this.setState({
        productions
      });
    }).then(() => {
      this.myProductions();
    });
  };

  fetchActorData = () => {
    fetch(URL + 'actors')
      .then(response => response.json())
      .then(actors => {
        this.setState({
          actors
        });
      });
  };

  myProductions = () => {
    const myProductions = []
    this.state.productions.forEach(production => {
      if (production.user_id === this.props.userId){
        return myProductions.push(production);
      }else{
        return;
      }
    });
    this.setState({
      myProductions
    });
  };

  handleViewProductionClick = () => {
    alert("View Production!!")
  }

  render() {
    return (
      <React.Fragment>
        {/* logic for displaying pages determined by header */}
        {this.props.page === 'all productions' ? <AllProductionsContainer allProductions={this.state.productions} handleViewProductionClick={this.handleViewProductionClick}/> : null}
        {this.props.page === 'new production' ? <CreateContainer actors={this.state.actors} /> : null}
        {this.props.page === 'my productions' ? <MyProductions myProductions={this.state.myProductions} handleViewProductionClick={this.handleViewProductionClick}/> : null}
      </React.Fragment>
    )
  }
}

export default ContentContainer;
