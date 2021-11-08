import React from 'react'
import './Undo.css'

export default function Undo(props) {
    return (
        <button className = 'undoButton' onClick={() => props.onClick()}>
            {props.value}
            Undo
        </button>
    )
}