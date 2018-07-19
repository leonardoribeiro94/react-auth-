import React, { Component } from 'react';
import './App.css';
import Routes from "./Routes";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <br/>
        <br/>
        <br/>
        <div>
          <Routes />
        </div>
      </div>
    );
  }
}

export default App;
