import React, { Component } from 'react';

class ARpage extends Component {
  render() {
    return (
      <React.Fragment>
        <div id='showDiv'>
          <img id='img_chairs' src='/assets/stage_setup_chairs.png' alt='chairs' />
          <img id='img_l-curtain' src='/assets/stage_setup_l-curtain.png' alt='left curtain' />
          <img id='img_r-curtain' src='/assets/stage_setup_r-curtain.png' alt='right curtain' />
          <img id='img_stage' src='/assets/stage_setup_stage.png' alt='stage' />
          {/* <img id='a-character' src={props.production.svg_url} alt={props.production.actor.name} />
          <img id='b-character' src={props.production.svg_url} alt={props.production.actor.name} /> */}
        </div>
      </React.Fragment>
    )
  }
}

export default ARpage;
