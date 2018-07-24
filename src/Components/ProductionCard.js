import React from 'react';
import { Card, Image } from 'semantic-ui-react';

const ProductionCard = (props) => (
  <Card onClick={() => props.onClickHandler(props.production.script_id)}>
    <Image src={props.production.script.img_url} alt='' />
    <div>
      <span className='cardTitle'>{props.production.script.title}</span>
      <span className='cardCopy'>Written by: {props.production.user.username}</span>
    </div>
  </Card>
);

export default ProductionCard;
