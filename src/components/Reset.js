import React from 'react'

export default function Reset(props) {
    return (
        <button className = 'resetButton' onClick={() => props.onClick()}>
            {props.value}
        </button>
    )
}