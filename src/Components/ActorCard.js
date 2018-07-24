import React from 'react';
import { Card, Image } from 'semantic-ui-react';

const ActorCard = (props) => (
  <Card onClick={() => props.handleClick(props.actor)} >
    <Image src={props.actor.img_url} />
    <Card.Content>
      <Card.Header>{props.actor.name}</Card.Header>
    </Card.Content>
  </Card>
)

export default ActorCard;
