import React from 'react';

import { Card, Image, Button } from 'semantic-ui-react'

const ProductionReview = (props) => (
    <Card centered>
        <Image src={props.production.script.img_url} alt='' />
        <Card.Content>
            <Card.Header>{props.production.script.title}</Card.Header>
            <Card.Description>Written by: {props.production.user.username}</Card.Description>
            <Card.Description>Featuring: {props.production.actors[0].name} and {props.production.actors[1].name}</Card.Description>
            <Button>View Production</Button>
        </Card.Content>
    </Card>
);
export default ProductionReview;
