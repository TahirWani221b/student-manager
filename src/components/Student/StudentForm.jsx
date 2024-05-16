import React, { useContext, useEffect, useState } from 'react'
import Modal from '../UI/Modal'
import Input from '../UI/Input'
import Button from '../UI/Button'
import classes from './StudentForm.module.css'
import StudentContext from '../../context/Students/StudentContext'

function StudentForm(props) {
    const { studentsListEdithandler } = useContext(StudentContext);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: ''
    });

    useEffect(() => {
        if (props.type === 'update') {
            console.log(props.updateFormData)
            setFormData(prev => {
                return props.updateFormData;
            })
        }
    }, []);

    const saveFormData = (event) => {
        const Eventname = event.target.name;
        const Eventvalue = event.target.value.trim();
        setFormData(prev => {
            return {
                ...prev,
                [Eventname]: Eventvalue
            }
        });
    }
    const handleFormSubmission = (event) => {
        event.preventDefault();
        studentsListEdithandler(formData, props.type);
        props.handleForm(false);
    }
    return (
        <Modal setShowFrom={props.handleForm}>
            <form onSubmit={handleFormSubmission}>

                <Input id="student-name" name="name" type="text" label="Name" onChange={saveFormData} value={formData.name} />
                <Input id="student-email" name="email" type="email" label="Email" onChange={saveFormData} value={formData.email} />
                <Input id="student-phone" name="phone" type="tel" label="Phone" onChange={saveFormData} value={formData.phone} />

                <Button type="submit" text={`${props.type === 'update' ? 'Update' : "Submit"}`} />
            </form>
        </Modal>
    )
}

export default StudentForm