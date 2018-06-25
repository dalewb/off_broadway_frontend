import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Button } from 'semantic-ui-react';

class Header extends Component {

  render() {
    return (
      <div id='header'>
        <NavLink to="/" exact onClick={() => this.props.onClickHandler('/')} >OFF-BROADWAY</NavLink>
        <div className='spacer'></div>
        <div className='line'></div>
        <Button name="all_productions" onClick={() => this.props.onClickHandler('all productions')}>All Productions</Button>
        <Button name="create_new_production" onClick={() => this.props.onClickHandler('new production')}>Create New Production</Button>
        <Button name="my_productions" onClick={() => this.props.onClickHandler('my productions')}>My Productions</Button>
        <Button name="ar" onClick={() => this.props.onClickHandler('ar')}>AR</Button>
        <Button name="log_out" onClick={this.props.logIn}>Log Out</Button>
      </div>
    );
  };
};

export default Header;
