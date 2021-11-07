import React, {Component} from 'react'
import Board from './Board'

export class Game extends Component {
    constructor(props){
        super(props)
        this.state = {
            squares: Array(9).fill(null),
            xTurn: true
        }
    }

    render() {
        return (
            <div name = "game">
                <Board squares = {this.state.squares}/>
            </div>       
        );
    }
}

export default Game