import React, {useEffect, useState} from 'react'
import Button from '../Button'

const Form = ({formData, postFormData, submitForm, err}) => {
  const [inputs, setInputs] = useState({})
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [check, setCheck ] = useState(false)

  const [success, setSuccess] = useState('')


 const obj = {firstInput:name, secondInput:email, thirdInput:message,credentialsInput:check }
  
 

  return (
    <form onSubmit={e => submitForm(e, obj)} className='contact-form'>
      {err !== '' && <div>{err}</div>}
      {success && <div>{success}</div>}
      <label> <p>{formData[0].firstInput}:</p>
        <input
        name='firstInput'
        type='text'
        value={name}
        className='contact-input'
        onChange={e => setName(e.target.value)}
         />
      </label>
      <label> <p>{formData[0].secondInput}:</p>
         <input
         className='contact-input '
         name='secondInput'
          type='text'
          value={email}
          onChange={e => setEmail(e.target.value)}
          />
      </label>

      <label><p>{formData[0].thirdInput}</p>
         <textarea
         className='contact-input '
         name='thirdInput'
         type='text'
         value={message}
         onChange={e => setMessage(e.target.value)}
          />
      </label>
      <label className='check-field'>
        <input 
        name='credentialsInput'
        type='checkbox'
        value={check }
        onChange={e => setCheck(e.target.checked)}
        />
      
         <p className='credentials'>{formData[0].credentialsInput}</p>
      </label>
      <Button  type='submit' btnText={formData[0].btnText}/>
      {/* <button className='nav-btn contact-btn' type='submit'><p>{formData[0].btnText}</p></button> */}
      
      
    </form>
  )
}

export default Form