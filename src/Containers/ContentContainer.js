import React, { Component } from 'react';

import AllProductionsContainer from './AllProductionsContainer';
import CreateContainer from './CreateContainer';
import MyProductions from '../Components/MyProductions';
import Home from '../Components/Home';
import ARpage from '../Components/AR';

const URL = 'https://mod-4-backend.herokuapp.com/api/v1/'
// const URL = 'http://localhost:3000/api/v1/'

class ContentContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      viewProduction: null
    };
  };

  componentDidMount() {
    this.fetchActorData();
  };

  fetchActorData = () => {
    fetch(URL + 'actors', {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem('token')
      }
    })
      .then(response => response.json())
      .then(actors => {
        this.setState({
          actors
        });
      });
  };

  seeTheShow = (viewProduction) => {
    this.props.onClickHandler('view production');
    this.setState({
      viewProduction
    });
  };

  setViewProduction = (viewProduction) => {
    this.setState({
      viewProduction,
      myProductions: [...this.state.myProductions, viewProduction],
      productions: [...this.state.productions, viewProduction]
    });
    this.props.onClickHandler('my productions')
  };

  render() {
    return (
      <React.Fragment>
        {this.props.page === '/' ? <Home/> : null}
        {this.props.page === 'view production' ? <ARpage show={this.state.viewProduction}/> : null}
        {this.props.page === 'all productions' ? <AllProductionsContainer handleViewProductionClick={this.seeTheShow}/> : null}
        {this.props.page === 'new production' ? <CreateContainer actors={this.state.actors} setViewProduction={this.setViewProduction}/> : null}
        {this.props.page === 'my productions' ? <MyProductions handleViewProductionClick={this.seeTheShow}/> : null}
      </React.Fragment>
    );
  };
};

export default ContentContainer;
