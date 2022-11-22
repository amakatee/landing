import React, { useState } from 'react'
import {useRouter } from 'next/router'

const login = () => {
    const  router = useRouter()
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [err, setErr] = useState('')


    const handleLogin =(e) => {
        e.preventDefault()
        if(username !== 'admin' && password !=='admin') {
            setErr('Wrong Login or Password')
            return 
        } 
      
        router.push('/admin')


    }
  return (
    <div className='admin-login'>
        <form className='auth-form' onSubmit={handleLogin}>
            {err && <div> {err} </div>}
        <label><p>Username:</p>
          <input 
          type="text"
          className='login-input'
          onChange={e => setUsername(e.target.value)}
          value={username}

            />
        </label>
        <label><p>Password:</p>
          <input 
          type="text"
          className='login-input'
          onChange={e => setPassword(e.target.value)}
          value={password}
          
            />
        </label>
        <button className='auth-btn' type='submit'>Submit</button>
        
      </form>

    </div>
  )
}

export default login