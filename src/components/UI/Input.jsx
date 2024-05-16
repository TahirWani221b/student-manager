import React from 'react'

function Input({ id, label, ...props }) {
    return (
        <>
            <label htmlFor={id}>{label}</label>
            <input {...props} />
        </>
    )
}

export default Input