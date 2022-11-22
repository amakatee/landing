import React from 'react'
import Form from './Form'
import SectionHeader from '../SectionHeader'

const Contact = ({headerText, formData}) => {
  return (
    <main className='contact-section'>
        <SectionHeader headerText="hello" />
        <Form />
       
    </main>
  )
}

export default Contact