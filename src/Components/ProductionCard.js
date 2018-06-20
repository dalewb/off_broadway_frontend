import React, { Component } from 'react';

class ProductionCard extends Component {
  // constructor(props) {
  //   super(props)

  // }

  render() {
    return (
      <div className='production_card' onClick={() => this.props.onClickHandler(this.props.production.script_id)}>
        <img src={this.props.production.script.img_url} alt='' />
        <h1>{this.props.production.script.title}</h1>
        <p>Written by: {this.props.production.user.username}</p>
      </div>
    )
  }
}

export default ProductionCard;
