import React from 'react';
import { Card } from 'semantic-ui-react';

const ProductionCard = (props) => (
  <Card onClick={() => props.onClickHandler(props.production.script_id)} >
    <div className='cardImage' style={{ backgroundImage: `url(${props.production.script.img_url})` }}></div>
    <div className='cardTitle'>
      <span className='vAlign'>
        {props.production.script.title}
      </span>
    </div>
  </Card>
);

export default ProductionCard;
