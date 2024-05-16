import React from 'react'
import classes from './Wrapper.module.css'

function Wrapper({ children, ...props }) {
    return (
        <section {...props}>{children}</section>
    )
}

export default Wrapper