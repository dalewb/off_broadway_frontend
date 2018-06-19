import React, { Component } from 'react';

import AllProductionsContainer from './AllProductionsContainer'
// import CreateContainer from './CreateContainer'

class ContentContainer extends Component {
  render() {
    return (
      <div>
        {/* logic for displaying pages determined by header */}
        <p>Content Container</p>
        <AllProductionsContainer />
        {/* <CreateContainer /> */}
      </div>
    )
  }
}

export default ContentContainer;
