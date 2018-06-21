import React, { Component } from 'react';

import { Button } from 'semantic-ui-react';

class Header extends Component {

  render() {
    return (
      <div id='header'>
        <Button name="home" onClick={() => this.props.onClickHandler('/')}>Home</Button>
        <Button name="all_productions" onClick={() => this.props.onClickHandler('all productions')}>All Productions</Button>
        <Button name="create_new_production" onClick={() => this.props.onClickHandler('new production')}>Create New Production</Button>
        <Button name="my_productions" onClick={() => this.props.onClickHandler('my productions')}>My Productions</Button>
      </div>
    );
  };
};

export default Header;
