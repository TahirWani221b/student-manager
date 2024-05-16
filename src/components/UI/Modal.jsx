import React from 'react'
import classes from './Modal.module.css'

function Modal({ children, setShowFrom, ...props }) {
    return (
        <>
            <div className={`${classes['backdrop']}`} onClick={() => setShowFrom(false)}></div>
            <div className={`${classes['modal']}`} {...props}>{children}</div>
        </>
    )
}

export default Modal