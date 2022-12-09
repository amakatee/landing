import React, { useState } from 'react'
import Form from './Form'
import SectionHeader from '../SectionHeader'

const Contact = ({headerText, formData, userFormData, updateForm, updateUserData}) => {
  const [err, setErr] = useState('') 


  

  const submitForm = (e, obj ) => {
    e.preventDefault()

  
    if(obj.firstInput === '' && obj.secondInput === '' && obj.credentials !== true) {
      setErr('Please make sure right inputs')
      console.log('er', err)
      return
    } 
    console.log(obj, err, obj.firstInput)
    updateUserData(obj)
    
   
  }


 
  return (
    <main id='contact' className='contact-section'>
        <SectionHeader headerText={headerText} />
        <Form formData={formData} submitForm={submitForm} err={err} />
       
    </main>
  )
}

export default Contact