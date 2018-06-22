import React, { Component } from 'react';

import Header from '../Components/Header'
import ContentContainer from '../Containers/ContentContainer'

class MainPage extends Component {
  state = {
    page: '/'
  }

  pageChange = (page) => {
    this.setState({
      page
    });
    window.history.pushState({}, "new state", page.replace(/ /g,"-"));
  }

  render() {
    return (
      <React.Fragment>
        <Header onClickHandler={this.pageChange} logIn={this.props.logIn} />
        <div id='sub-content'>
          <ContentContainer userId={this.props.userId} page={this.state.page} onClickHandler={this.pageChange} />
        </div>
      </React.Fragment>
    )
  }
}

export default MainPage;
