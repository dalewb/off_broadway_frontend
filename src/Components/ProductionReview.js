import React from 'react';

import { Card, Image, Button } from 'semantic-ui-react'

const ProductionReview = (props) => (
    <Card centered onClick={props.clickHandler}>
        <Image src={props.production.script.img_url} alt='' />
        <Card.Content>
            <span className='cardTitle'>{props.production.script.title}</span>
            <span className='cardCopy'>Written by: {props.production.user.username}</span>
            <span className='cardCopy'>Featuring: {props.production.actors[0].name} and {props.production.actors[1].name}</span>
            <Button onClick={() => props.handleViewProductionClick(props.production)}>View Production</Button>
        </Card.Content>
    </Card>
);
export default ProductionReview;
