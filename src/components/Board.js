import { render } from '@testing-library/react'
import Square from './Square'
import React, {Component} from 'react'
import './Board.css'

export class Board extends Component {
  renderSquare() {
    return (
      <Square
        onClick={this.props.onClick}
      />
    );
  }

  render() {
    return (
      <div name = "board">
        <div className = 'boardRow'>
          {this.renderSquare()}
          {this.renderSquare()}
          {this.renderSquare()}
        </div>
        <div className = 'boardRow'>
          {this.renderSquare()}
          {this.renderSquare()}
          {this.renderSquare()}
        </div>
        <div className = 'boardRow'>
          {this.renderSquare()}
          {this.renderSquare()}
          {this.renderSquare()}
        </div>
    </div>       
   );
  }
}

export default Board