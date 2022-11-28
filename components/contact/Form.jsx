import React, {useState} from 'react'

const Form = ({formData}) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [check, setCheck ] = useState(false)
  const [err, setErr] = useState('')
  const [success, setSuccess] = useState('')
  console.log(formData)

  const getUserData = (e) => {
    e.preventDefault()
    if(check !== true) {
      setErr('agree ')
      return
    }
   
 
    if(name === '' || email === '') {
      setErr('MAke sure to put name and eemail')
      return
    }
    console.log({name, email, message, check})
    setErr('')
    if(name, email) setSuccess('Thank you')

  } 


  return (
    <form onSubmit={getUserData} className='contact-form'>
      {err && <div>{err}</div>}
      {success && <div>{success}</div>}
      <label> <p>{formData[0].firstInput}:</p>
        <input
        type='text'
        value={name}
        className='contact-input'
        onChange={e => setName(e.target.value)}
         />
      </label>
      <label> <p>{formData[0].secondInput}:</p>
         <input
         className='contact-input '
          type='text'
          value={email}
          onChange={e => setEmail(e.target.value)}
          />
      </label>

      <label><p>{formData[0].thirdInput}</p>
         <textarea
         className='contact-input '
         type='text'
         value={message}
         onChange={e => setMessage(e.target.checked)}
          />
      </label>
      <label className='check-field'>
        <input 
        type='checkbox'
        value={check}
        onChange={e => setCheck(e.target.checked)}
        />
      
         <p>{formData[0].credentialsInput}</p>
      </label>
      
      <button className='nav-btn contact-btn' type='submit'>{formData[0].btnText}</button>
      
      
    </form>
  )
}

export default Form