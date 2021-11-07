import React from 'react'

export default function Undo(props) {
    return (
        <button className = 'undoButton' onClick={() => props.onClick()}>
            {props.value}
            Undo
        </button>
    )
}