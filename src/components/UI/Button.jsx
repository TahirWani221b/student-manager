import React from 'react'
import classes from './Button.module.css'

function Button({ text, ...props }) {
    return (
        <button {...props}>{text}</button>
    )
}

export default Button