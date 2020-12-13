import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      board: ["", "", "", "", "", "", "", "", ""]
    }
  }
  
  render() {
  return (
    <div className="App">
      <h1>Tic Tac Toe</h1>
      <div className="board">
        <div className="square"></div>
        <div className="square"></div>
        <div className="square"></div>
        <div className="square"></div>
        <div className="square"></div>
        <div className="square"></div>
        <div className="square"></div>
        <div className="square"></div>
        <div className="square"></div>
      </div>
    </div>
    );
  }
}

export default App;
