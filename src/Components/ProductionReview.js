import React from 'react';

const ProductionReview = (props) => (
    <div>
        <img src={props.production.script.img_url} alt='' width='20%' />
        <p>
            {props.production.script.title}<br />
            Written by: {props.production.user.username}<br />
            Featuring: {props.production.actors[0].name} and {props.production.actors[1].name}<br />
            <button>View Production</button>
        </p>
    </div>
);
export default ProductionReview;