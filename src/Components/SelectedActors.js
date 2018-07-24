import React from 'react';
import ActorCard from './ActorCard'

const SelectedActors = (props) => (
  <div className="ui five cards centered">
    {props.myActors.map((actor, index) =>  <ActorCard actor={actor} key={index} handleClick={() => {props.removeChosenActor(actor)}} />)}
  </div>
)

export default SelectedActors;
