import React from 'react';

const ProductionReview = (props) => (
    <div id='singleProduction'>
      <div className='x' onClick={props.clickHandler}>X</div>
      <div className='imageInspect' style={{ backgroundImage: `url(${props.production.script.img_url})` }}></div>
      <div className='details'>
        <span className='reviewTitle'>{props.production.script.title}</span>
        <p>
          Written by: {props.production.user.username}<br/>
          Featuring: {props.production.actors[0].name} and {props.production.actors[1].name}
        </p>
        <button onClick={() => props.handleViewProductionClick(props.production.id)} className='customButton'>View Production</button>
      </div>
    </div>
);
export default ProductionReview;
