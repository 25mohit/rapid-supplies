import React, { useState } from 'react'
import LoginForm from '../utils/Form/LoginForm'
import RegisterForm from '../utils/Form/RegisterForm'

const User = () => {
    const [visibleForm, setVisibleForm] = useState('login')

  return (
    <div>
        <div className="toogler flex gap-2 items-center">
            <span className='cursor-pointer' onClick={() => setVisibleForm('login')}>Login</span>
            <b>/</b>
            <span className='cursor-pointer' onClick={() => setVisibleForm('register')}>Register</span>
        </div>
        {
            visibleForm === 'login' ? <LoginForm setVisibleForm={setVisibleForm}/> : <RegisterForm setVisibleForm={setVisibleForm}/>
        }
    </div>
  )
}

export default User