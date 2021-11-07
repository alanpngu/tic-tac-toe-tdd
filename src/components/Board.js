import { render } from '@testing-library/react'
import Square from './Square'
import React, {Component} from 'react'
import './Board.css'

export class Board extends Component {
  renderSquare(i) {
    return (
      <Square
        onClick={() => this.props.onClick(i)}
        value = {this.props.squares[i]}
      />
    );
  }

  render() {
    return (
      <div className = "board">
        <div className = 'boardRow'>
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className = 'boardRow'>
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className = 'boardRow'>
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
    </div>       
   );
  }
}

export default Board