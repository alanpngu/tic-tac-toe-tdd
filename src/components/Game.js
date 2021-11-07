import React, {Component} from 'react'
import Board from './Board'
import { calculateWinner } from '../utils/calculateWinner'
import Reset from './Reset'

export class Game extends Component {
  constructor(props){
    super(props)
    this.state = this.initialState;
  }

  get initialState() {
    return {
      history: [
        {
          squares: Array(9).fill(null),
        }
      ],
      xTurn: true,
      turnsTaken: 0
    }
  }

  resetToStart() {
    this.setState(this.initialState);
  }

  handleClick(i) {
    const history = this.state.history;
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    if(calculateWinner(squares) || squares[i]) {
        return;
    }
    squares[i] = this.state.xTurn ? 'X' : 'O';
    this.setState({
      history: history.concat([
        {
          squares:squares,
        }
      ]),
      xTurn: !this.state.xTurn,
    });
  }

  render() {
    const history = this.state.history;
    const current = history[history.length - 1];
    const winnerFound = calculateWinner(current.squares);
    let turnText;
    if (winnerFound) {
      turnText = winnerFound + " has won the game!";
    } else if (history.length >= 10) {
      turnText = "This game is a draw!";
    } else {
      turnText = this.state.xTurn ? `It is currently X's turn!` : `It is currently O's turn!`
    }

    return (    
      <div name = "game">
        <div className = 'gameBoard'>
          <Board 
            squares = {current.squares}
            onClick = {i => this.handleClick(i)}
          />
        </div>
          <div className = 'turnText'>
            {turnText}
          </div>
          <div className = 'otherButtons'>
            <Reset className = 'resetButton' onClick = {() => this.resetToStart()} />
          </div>    
      </div>   

    );
  }
}

export default Game
