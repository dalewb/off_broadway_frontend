import React, { Component } from 'react';

import Header from '../Components/Header'
import ContentContainer from '../Containers/ContentContainer'

class MainPage extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <React.Fragment>
        <Header />
        <ContentContainer />
      </React.Fragment>
    )
  }
}

export default MainPage;
