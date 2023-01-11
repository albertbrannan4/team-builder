
import './App.css';
import React, { useState } from 'react';
import Form from './Form';

const defaultValue = [
  { name: 'Rui', email: 'ImKnowKarate@gmail.com', role: 'frontend' },
  { name: 'Noel', email: 'ImAcat@gmail.com', role: 'cat' },
  { name: 'Lucky', email: 'ImAcat@gmail.com', role: 'cat' },
  { name: 'Albert', email: 'No@gmail.com', role: 'backend' },
]
const InitialFormValues = { name: '', email: '', role: '' };
function App() {
  const [teamMembers, setTeamMembers] = useState(defaultValue);
  const [formValues, setFormValues] = useState(InitialFormValues);

  const updateForm =(inputName,inputValue)=>{
    setFormValues({...formValues,[inputName]:inputValue})
  }
  
  const submitForm =()=>{
    const newMember={
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      role: formValues.role
    }
    setTeamMembers([...teamMembers,newMember])
  }
  
  return (
    <div className="App">
      {teamMembers.map((person, idx) => {
        return (
          <div key={idx}>{person.name}... {person.email}... {person.role}</div>
        )
      })}
      <Form formValues={formValues} update={updateForm} submit={submitForm}/>
    </div>
  );
}

export default App;
