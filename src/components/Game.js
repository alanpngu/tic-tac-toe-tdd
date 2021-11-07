import React, {Component} from 'react'
import Board from './Board'

export class Game extends Component {
    constructor(props){
        super(props)
        this.state = {
            squares: Array(9).fill(null),
            xTurn: true,
            turnsTaken: 0
        }
    }

    render() {
        let turnText = this.state.xTurn ? `It is currently X's turn!` : `It is currently O's turn!`
        return (
            
            <div name = "game">
                <Board squares = {this.state.squares}/>
                <div className = 'turnText'>
                    {turnText}
                </div>    
            </div>   

        );
    }
}

export default Game