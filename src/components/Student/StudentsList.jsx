import React, { useContext } from 'react'
import classes from './StudentList.module.css'
import Button from '../UI/Button'
import StudentContext from '../../context/Students/StudentContext';

function StudentsList({ students, handleForm, setType, setUpdateFormData }) {
    const { handleDeleteStudents } = useContext(StudentContext);
    return (
        <ul>
            {
                students.length ? students.map((student) => (
                    <li key={Math.random()} className={`${classes['student-single']}`}>
                        <span>{student.name}</span>
                        <span>{student.email}</span>
                        <span>{student.phone}</span>
                        <span className={`${classes['operations']}`}>
                            <Button text='Delete' onClick={() => handleDeleteStudents(student.email)} />
                            <Button text='Edit' onClick={() => { handleForm(true); setType('update'); setUpdateFormData({ name: student.name, email: student.email, phone: student.phone }) }} />
                        </span>
                    </li>
                )) : <p>No Students found!</p>
            }
        </ul>
    )
}

export default StudentsList