import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <div>
        test
        <button name="all_productions">All Productions</button>
        <button name="create_new_production">Create New Production</button>
        <button name="my_productions">My Productions</button>
      </div>
    )
  }
}

export default Header;
