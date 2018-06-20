import React, { Component } from 'react';

import ActorCard from '../Components/ActorCard'

// const URL = 'https://mod-4-backend.herokuapp.com/api/v1/'

class AllActorsDisplay extends Component {
  constructor(props) {
    super(props)
    // this.state = {
    //   actors: []
    // }
  }

  // componentDidMount(){
  //   this.fetchActorData();
  // }

  // fetchActorData = () => {
  //   fetch(URL + 'actors').then(response => response.json()).then(actors => {
  //     this.setState({
  //       actors
  //     });
  //   });
  // };

  renderActorCards = () => {
    const cards = this.props.actors.map((actor, index) => {
      return <ActorCard actor={actor} key={index} handleClick={this.props.handleClick}/>
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
