import React, { Component } from 'react';
import LoginPage from './LoginPage';
import MainPage from './MainPage';
import Footer from '../Components/Footer';

import { BrowserRouter as Router, Route } from 'react-router-dom';

class App extends Component {
  state = {
    loggedIn: false,
    userExists: false,
    userId: null
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
    this.loggedInCheck();
    this.changeBody();
  }

  userExistsCheck = () => {
    this.setState({
      userExists: !this.state.userExists
    });
  };

  loggedInCheck = () => {
    if (localStorage.getItem('user_id')){
      this.setState({
        loggedIn: true
      });
    };
  };

  logIn = () => {
    window.history.pushState({}, "new state", "/");
    this.loggedInCheck();
    // this.setState({
    //   loggedIn: true,
    //   userId: parseInt(localStorage.getItem('user_id'), 10)
    // });
  };

  logOut = () => {
    localStorage.clear();
    window.history.pushState({}, "new state", "/");
    this.setState({
      loggedIn: false,
      userId: null
    });
  };

  loggedInPage = () => {
    return <MainPage userId={this.state.userId} logOut={this.logOut} />
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
          {this.state.loggedIn ? <Footer/> : <object id='index_group' aria-label='Group Shot' data='/assets/standup2.svg' type="image/svg+xml"></object>}
        </div>
      </Router>
    );
  }
}

export default App;
