import React, {Component} from 'react'
import Board from './Board'

export class Game extends Component {
  constructor(props){
    super(props)
      this.state = {
        history: [
          {
            squares: Array(9).fill(null),
          }
        ],
        xTurn: true,
        turnsTaken: 0
      }
  }

  handleClick(i) {
    const history = this.state.history;
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    if(squares[i]) {
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
    let turnText = this.state.xTurn ? `It is currently X's turn!` : `It is currently O's turn!`
    return (    
      <div name = "game">
        <Board 
          squares = {current.squares}
          onClick = {i => this.handleClick(i)}
        />
          <div className = 'turnText'>
            {turnText}
          </div>    
      </div>   

    );
  }
}

export default Game
