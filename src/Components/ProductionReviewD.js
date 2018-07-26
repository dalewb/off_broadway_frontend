import React from 'react';
import { Card, Button } from 'semantic-ui-react'

const ProductionReview = (props) => (
    <Card centered onClick={props.clickHandler}>
      <div className='cardImage' style={{ backgroundImage: `url(${props.production.script.img_url})` }}></div>
      <Card.Content>
          <span className='cardTitle'>{props.production.script.title}</span>
          <span className='cardCopy'>Written by: {props.production.user.username}</span>
          <span className='cardCopy'>Featuring: {props.production.actors[0].name} and {props.production.actors[1].name}</span>
          <Button onClick={() => props.handleViewProductionClick(props.production.id)}>View Production</Button>
      </Card.Content>
    </Card>
);
export default ProductionReview;