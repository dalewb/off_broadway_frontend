import React, { Component } from 'react';

import Header from '../Components/Header'
import AllProductions from '../Components/AllProductions';
import CreateNewProduction from '../Components/CreateNewProduction';
import Home from '../Components/Home';
import Theatre from '../Components/Theatre';

class MainPage extends Component {
  state = {
    page: '/',
    viewProduction: null
  }

  pageChange = (page) => {
    this.setState({
      page
    });
    window.history.pushState({}, "new state", page.replace(/ /g,"-"));
  }

  seeTheShow = (viewProduction) => {
    this.pageChange('view production');
    this.setState({
      viewProduction
    });
  };

  setViewProduction = (viewProduction) => {
    this.setState({
      viewProduction
    });
    this.pageChange('my productions')
  };

  render() {
    return (
      <React.Fragment>
        <Header onClickHandler={this.pageChange} logOut={this.props.logOut} />
        <div id='sub-content'>
          {this.state.page === '/' ? <Home/> : null}
          {this.state.page === 'view production' ? <Theatre show={this.state.viewProduction}/> : null}
          {this.state.page === 'all productions' ? <AllProductions handleViewProductionClick={this.seeTheShow} type='allProductions'/> : null}
          {this.state.page === 'new production' ? <CreateNewProduction pageChange={this.pageChange} setViewProduction={this.setViewProduction} /> : null}
          {this.state.page === 'my productions' ? <AllProductions handleViewProductionClick={this.seeTheShow} type='myProductions'/> : null}
        </div>
      </React.Fragment>
    )
  }
}

export default MainPage;
