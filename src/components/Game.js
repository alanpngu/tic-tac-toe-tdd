import React, {Component} from 'react'
import Board from './Board'

export class Game extends Component {
    render() {
        return (
            <div name = "game">
                <Board />
            </div>       
        );
    }
}

export default Game