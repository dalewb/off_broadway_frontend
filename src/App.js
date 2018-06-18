import React, { Component } from 'react';
import './App.css';
import LoginPage from './Containers/LoginPage'
import MainPage from './Containers/MainPage'

class App extends Component {
  render() {
    return (
      <div className="App">
        <LoginPage />
        <MainPage />
      </div>
    );
  }
}

export default App;
