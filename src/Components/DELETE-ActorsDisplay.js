import React from 'react';
import ActorCard from './ActorCard'

const AllActorsDisplay = (props) => (
  <div className="ui five cards centered">
    {props.actors.map((actor, index) => <ActorCard actor={actor} key={index} handleClick={props.handleClick}/>)}
  </div>
)

export default AllActorsDisplay;
