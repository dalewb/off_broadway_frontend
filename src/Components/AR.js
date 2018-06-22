import React, { Component } from 'react';

class ARpage extends Component {
  render() {
    console.log('inside AR file, svg:', this.props.show.actors[0].svg_url);
    return (
      <React.Fragment>
        <div id='showDiv'>
          <img id='img_chairs' src='/assets/stage_setup_chairs.png' alt='chairs' />
          <img id='img_l-curtain' src='/assets/stage_setup_l-curtain.png' alt='left curtain' />
          <img id='img_r-curtain' src='/assets/stage_setup_r-curtain.png' alt='right curtain' />
          <img id='img_stage' src='/assets/stage_setup_stage.png' alt='stage' />
          <object id='a-character' data={this.props.show.actors[0].svg_url} type="image/svg+xml"></object>
          <object id='b-character' data={this.props.show.actors[1].svg_url} type="image/svg+xml"></object>
        </div>
      </React.Fragment>
    )
  }
}

export default ARpage;
