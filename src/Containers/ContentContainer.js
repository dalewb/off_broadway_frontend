import React, { Component } from 'react';

import AllProductionsContainer from './AllProductionsContainer'
import CreateContainer from './CreateContainer'

const URL = 'https://mod-4-backend.herokuapp.com/api/v1/'
// const URL = 'http://localhost:3000/api/v1/'

class ContentContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      productions: [],
      actors: [],
      scripts: []
    };
  };

  componentDidMount() {
    this.fetchProductionData();
    this.fetchActorData();
    // this.fetchScriptData();
    // this.fetchUserData();
  };

  fetchProductionData = () => {
    fetch(URL + 'productions').then(response => response.json()).then(productions => {
      this.setState({
        productions
      });
    });
  };

  // fetchScriptData = () => {
  //   fetch(URL + 'scripts').then(response => response.json()).then(scripts => {
  //     this.setState({
  //       scripts
  //     });
  //   });
  // };

  fetchActorData = () => {
    fetch(URL + 'actors')
      .then(response => response.json())
      .then(actors => {
        this.setState({
          actors
        });
      });
  };

  // fetchUserData = () => {
  //   fetch(URL + 'users').then(response => response.json()).then(users => {
  //     this.setState({
  //       users
  //     });
  //   });
  // };

  render() {
    return (
      <React.Fragment>
        {/* logic for displaying pages determined by header */}
        <AllProductionsContainer allProductions={this.state.productions}/>
        <CreateContainer actors={this.state.actors} />
      </React.Fragment>
    )
  }
}

export default ContentContainer;
