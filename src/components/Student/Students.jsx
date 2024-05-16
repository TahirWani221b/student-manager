import React, { useContext } from 'react'
import classes from './Students.module.css'
import StudentList from './StudentsList'
import StudentContext from '../../context/Students/StudentContext';

function Students({ handleForm, setType, setUpdateFormData }) {
    const { studentsList } = useContext(StudentContext);
    return (
        <div className={`${classes['students']}`}>
            <StudentList students={studentsList} handleForm={handleForm} setType={setType} setUpdateFormData={setUpdateFormData} />
        </div>
    )
}

export default Students