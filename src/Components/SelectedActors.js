import React from 'react';
import ActorCard from './ActorCard'

const SelectedActors = (props) => (
  <div id='selectedCards'>
    <h4>2. Select two actors:</h4>
    <div className="ui five cards centered">
      {props.myActors.map((actor, index) =>  <ActorCard actor={actor} key={index} handleClick={() => {props.removeChosenActor(actor)}} />)}
    </div>
  </div>
)

export default SelectedActors;
