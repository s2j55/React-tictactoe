import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      player_turn: "X",
      board: ["", "", "", "", "", "", "", "", ""]
    }
  }

  render() {
  return (
    <div className="App">
      <h1>Tic Tac Toe</h1>
      <div className="board">
       {this.state.board.map((square) => {
         return(<div className="square">{square}</div>)
       })}
      </div>
    </div>
    );
  }
}

export default App;
