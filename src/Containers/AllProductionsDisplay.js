import React, { Component } from 'react';

import ProductionCard from '../Components/ProductionCard'

const URL = 'https://mod-4-backend.herokuapp.com/api/v1/'

class AllProductionsDisplay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      productions: [],
      characters: [],
      scripts: []
    };
    this.fetchProductionData();
    this.fetchScriptData();
    this.fetchCharacterData();
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

  fetchCharacterData = () => {
    fetch(URL + 'characters').then(response => response.json()).then(characters => {
      this.setState({
        characters
      });
    });
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
      const charA = this.state.characters.find(character => {
        newProduction[production.id] = {};
        if (character.id === production.character_id){
          return newProduction[production.id]['A'] = character
        };
      });
      const script = this.state.scripts.find(s => {
        if (s.id === production.script_id){
          return newProduction[production.id]['script'] = s
        }
      });
    });
    return newProduction;
  };

  render() {
    console.log(this.constructProduction());
    return (
      <ProductionCard />
    )
  }
}

export default AllProductionsDisplay;
