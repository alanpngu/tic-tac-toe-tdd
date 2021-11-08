import React from 'react'
import './Square.css'

export default function Square(props) {
    return (
        <button className = 'square' onClick={() => props.onClick()} style = {{backgroundColor: props.color}}>
            {props.value}
        </button>
    )
}