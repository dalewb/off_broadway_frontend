import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <div id='header'>
        <h1>Header Div</h1>
        <button name="all_productions" onClick={() => this.props.onClickHandler('all productions')}>All Productions</button>
        <button name="create_new_production" onClick={() => this.props.onClickHandler('new production')}>Create New Production</button>
        <button name="my_productions" onClick={() => this.props.onClickHandler('my productions')}>My Productions</button>
      </div>
    )
  }
}

export default Header;
