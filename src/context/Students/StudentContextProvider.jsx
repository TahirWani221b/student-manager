import React, { useState } from 'react';
import StudentContext from './StudentContext';

function StudentContextProvider({ children }) {

    const [studentsList, setStudentsList] = useState([]);

    const studentsListEdithandler = (formData, type) => {
        if (type === 'update') {
            formData = studentsList.map((student) => {
                return student.email === formData.email ? formData : student
            });
            setStudentsList(prev => {
                return [
                    ...formData
                ]
            });
        } else {
            setStudentsList(prev => {
                return [
                    ...prev,
                    { ...formData }
                ]
            });
        }
    }

    const handleDeleteStudents = (email) => {
        const newStudentList = studentsList.filter((student) => {
            return student.email !== email
        })

        setStudentsList(prev => newStudentList);
    }
    return (
        <StudentContext.Provider value={{ studentsList, studentsListEdithandler, handleDeleteStudents }}>{children}</StudentContext.Provider>
    )
}

export default StudentContextProvider