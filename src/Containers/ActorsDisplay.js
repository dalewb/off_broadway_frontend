import React, { Component } from 'react';

import ActorCard from '../Components/ActorCard'

const URL = 'http://localhost:3000/api/v1/actors'

class AllActorsDisplay extends Component {
  constructor(props) {
    super(props)
    this.state = {
      actors: []
    }
  }

  componentDidMount(){
    this.fetchActorData();
  }

  fetchActorData = () => {
    fetch(URL).then(response => response.json()).then(actors => {
      this.setState({
        actors
      });
    });
  };

  renderActorCards = () => {
    const cards = this.state.actors.map((actor, index) => {
      return <ActorCard actor={actor} key={index} />
    });
    return cards;
  };

  render() {
    const aCards = this.renderActorCards();
    return (
      <React.Fragment>
        {aCards}
      </React.Fragment>
    )
  }
}

export default AllActorsDisplay;
