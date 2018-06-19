import React, { Component } from 'react';

import ProductionCard from '../Components/ProductionCard'

// const URL = 'https://mod-4-backend.herokuapp.com/api/v1/'
const URL = 'http://localhost:3000/api/v1/'

class AllProductionsDisplay extends Component {
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
    this.fetchScriptData();
    this.fetchActorData();
    this.fetchUserData();
  };

  fetchProductionData = () => {
    fetch(URL + 'productions').then(response => response.json()).then(productions => {
      this.setState({
        productions
      });
    });
  };

  fetchScriptData = () => {
    fetch(URL + 'scripts').then(response => response.json()).then(scripts => {
      this.setState({
        scripts
      });
    });
  };

  fetchActorData = () => {
    fetch(URL + 'actors')
      .then(response => response.json())
      .then(actors => this.setState({
        actors
      }));
  };

  fetchUserData = () => {
    fetch(URL + 'users').then(response => response.json()).then(users => {
      this.setState({
        users
      });
    });
  };

  constructProduction = () => {
    let newProduction = {};
    this.state.productions.map(production => {
      newProduction[production.id] = {};
      const charA = this.state.actors.find(actor => {
        if (actor.id === production.actor_id){
          return newProduction[production.id]['A'] = actor
        };
      });
      const script = this.state.scripts.find(s => {
        if (s.id === production.script_id){
          return newProduction[production.id]['script'] = s
        }
      });
    });
    console.log(newProduction);
    return newProduction;
  };

  renderProductions = () => {
    <ProductionCard productionInfo={this.constructProduction()} />
  }

  render() {
    console.log(this.constructProduction());
    return (
      <p>display</p>
    )
  }
}

export default AllProductionsDisplay;
