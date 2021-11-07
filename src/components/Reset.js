import React from 'react'
import './Reset.css'

export default function Reset(props) {
    return (
        <button className = 'resetButton' onClick={() => props.onClick()}>
            {props.value}
            Reset
        </button>
    )
}