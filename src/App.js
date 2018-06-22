import React, { Component } from 'react';
import './App.css';
import LoginPage from './Containers/LoginPage';
import MainPage from './Containers/MainPage';
import Footer from './Components/Footer';

import { BrowserRouter as Router, Route } from 'react-router-dom';

class App extends Component {
  state = {
    loggedIn: false,
    userExists: false,
    userId: 2
  }

  changeBody = () => {
    const body = document.getElementsByTagName('body');
    if (this.state.loggedIn){
      body[0].style.background = '#fff';
    }else{
      body[0].style.backgroundImage = `url('./assets/bg.jpg')`;
      body[0].style.backgroundSize = '150%';
      body[0].style.backgroundPosition = 'center';
      body[0].style.backgroundRepeat = 'no-repeat';
    }
  }

  componentDidMount() {
    this.changeBody();
  }

  userExistsCheck = () => {
    this.setState({
      userExists: !this.state.userExists
    });
  };

  logIn = (e) => {
    e.preventDefault();
    window.history.pushState({}, "new state", "/");
    this.setState({
      loggedIn: !this.state.loggedIn
    });
  }

  loggedInPage = () => {
    return <MainPage userId={this.state.userId} logIn={this.logIn} />
  };

  requireAuth = () => {
    if (!this.state.loggedIn){
      window.history.pushState({}, "new state", "/");
    }
  }

  render() {
    this.changeBody();
    this.requireAuth();
    return (
      <Router>
        <div className="App">
          <div id='contentContainer'>
            {this.state.loggedIn ? <React.Fragment>
              <Route exact path="/" render={this.loggedInPage} /> 
              <Route exact path="/new-production" render={this.loggedInPage} />
              <Route exact path="/my-productions" render={this.loggedInPage} />
              <Route exact path="/all-productions" render={this.loggedInPage} />
              </React.Fragment>: <React.Fragment>
                <LoginPage logIn={this.logIn} userExistsState={this.state.userExists} userExistsCheck={this.userExistsCheck}/>
              </React.Fragment>
            }
          </div>
          <div className='spacer'></div>
          {this.state.loggedIn ? <Footer/> : <object id='index_group' aria-label='Group Shot' data='/assets/standup.svg' type="image/svg+xml"></object>}
        </div>
      </Router>
    );
  }
}

export default App;
