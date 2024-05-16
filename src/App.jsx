import { useState } from 'react'
import Header from './components/Layout/Header'
import AddStudent from './components/Student/AddStudent'
import Wrapper from './components/UI/Wrapper'
import Students from './components/Student/Students'
import StudentForm from './components/Student/StudentForm'
import StudentContextProvider from './context/Students/StudentContextProvider'

function App() {
  const [showForm, setShowForm] = useState(false);
  const [type, setType] = useState('submit');
  const [updateFormData, setUpdateFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });
  return (
    <>
      <StudentContextProvider>
        <Header />
        {showForm && <StudentForm handleForm={setShowForm} type={type} updateFormData={updateFormData} />}
        <Wrapper>
          <AddStudent handleForm={setShowForm} setType={setType} />
          <Students handleForm={setShowForm} setType={setType} setUpdateFormData={setUpdateFormData} />
        </Wrapper>
      </StudentContextProvider>
    </>
  )
}

export default App
