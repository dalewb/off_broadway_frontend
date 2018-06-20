import React, { Component } from 'react';

import Header from '../Components/Header'
import ContentContainer from '../Containers/ContentContainer'

class MainPage extends Component {
  state = {
    page: 'all productions'
  }

  pageChange = (page) => {
    this.setState({
      page
    });
  }

  render() {
    return (
      <React.Fragment>
        <Header onClickHandler={this.pageChange} />
        <ContentContainer userId={this.props.userId} page={this.state.page} />
      </React.Fragment>
    )
  }
}

export default MainPage;
