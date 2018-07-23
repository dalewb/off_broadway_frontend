import React, { Component } from 'react';

import Header from '../Components/Header'
import AllProductionsContainer from './AllProductionsContainer';
import CreateContainer from './CreateContainer';
import MyProductions from '../Components/MyProductions';
import Home from '../Components/Home';
import ARpage from '../Components/AR';

const URL = 'https://mod-4-backend.herokuapp.com/api/v1/'

class MainPage extends Component {
  state = {
    page: '/',
    viewProduction: null
  }

  componentDidMount() {
    this.fetchActorData();
  };

  pageChange = (page) => {
    this.setState({
      page
    });
    window.history.pushState({}, "new state", page.replace(/ /g,"-"));
  }

  fetchActorData = () => {
    fetch(URL + 'actors', {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem('token')
      }
    })
      .then(response => response.json())
      .then(actors => {
        this.setState({
          actors
        });
      });
  };

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
    console.log('state', this.state);
    return (
      <React.Fragment>
        <Header onClickHandler={this.pageChange} logOut={this.props.logOut} />
        <div id='sub-content'>
          {this.state.page === '/' ? <Home/> : null}
          {this.state.page === 'view production' ? <ARpage show={this.state.viewProduction}/> : null}
          {this.state.page === 'all productions' ? <AllProductionsContainer handleViewProductionClick={this.seeTheShow}/> : null}
          {this.state.page === 'new production' ? <CreateContainer actors={this.state.actors} pageChange={this.pageChange} /> : null}
          {this.state.page === 'my productions' ? <MyProductions handleViewProductionClick={this.seeTheShow}/> : null}
        </div>
      </React.Fragment>
    )
  }
}

export default MainPage;
