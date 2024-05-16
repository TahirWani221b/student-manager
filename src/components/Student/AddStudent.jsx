import React from 'react'
import Button from '../UI/Button'
import classes from './AddStudent.module.css'

function AddStudent(props) {
    return (
        <Button onClick={() => { props.setType(prev => 'submit'); props.handleForm(true); }} text='Add Student' />
    )
}

export default AddStudent