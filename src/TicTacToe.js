import React, { useState } from 'react'
import "./TicTacToe.css";

function TicTacToe() {
  return (
    <div>
      <div></div>
    </div>
  );
}

export default TicTacToe


// square
//value(prop)
//onClick function (prop)
function Square (props) {
  return (
  <button className="square" onClick={props.onClick}>
    {props.value}
    </button>
  );
}

//board
function Board() {
  //state
  //boardState
  const [boardSquares, setBoardSquares] = useState([Array(9).fill(null)]);
  //turnState, it means the first person's turn. X's turn
  const [xIsNext, setXIsNext] = useState(true);
  //handleClick
  const handleClick = index =>{
     //copy of our board state
     const squares = [...boardSquares];
    //if the index of the board is filled, return
    if (calculateWinner(boardSquares) || squares[index]) return;
    //add X or O
    squares[index] = xIsNext ? "X" : "O"
    //calculate next turn
    //set the state of the board
    setBoardSquares(squares);
    //set the state of the turn
    setXIsNext(!xIsNext);
  };
   //create a render square function
   const renderSquare = (index) => {
     return <Square value={boardSquares(index)} onClick={() => handleClick(index)}/>
   }
    // take in an index
      // return a square, with the correct value and function
      //initialize status
let status;
const winner = calculateWinner(boardSquares);

status = winner ? `Winner is: ${winner}`
: `Next player : ${xIsNext ? "X" : "X"}`;

  return (
    <div>
      <div className="status">{status}</div>
      <div className="board-row">
      {renderSquare(0)}
      {renderSquare(1)}
      {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
        </div>
    </div>
  )
 }


//function that calculates the winner
function calculateWinner(squares){
  const winning_combos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  for (let i=0; i<winning_combos.length; i++) {
    const [a, b, c] = winning_combos[i];
    if(squares[a] && squares[a] === squares[b] && squares[b] === squares[c] && squares[c]) {
      return squares[a];
    }
  }
  return null;
}