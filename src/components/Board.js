import { render } from '@testing-library/react'
import Square from './Square'
import React, {Component} from 'react'

export class Board extends Component {
    render() {
        return (
            <div name = "board">
                <div>
                    <Square />
                </div>
            </div>       
        );
    }
}

export default Board