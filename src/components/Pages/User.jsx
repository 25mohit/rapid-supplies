import React, { useState } from 'react'
import LoginForm from '../utils/Form/LoginForm'
import RegisterForm from '../utils/Form/RegisterForm'
import Section from '../HOC/Section'

const User = () => {
    const [visibleForm, setVisibleForm] = useState('login')

  return (
    <Section>
        <div className="toogler flex gap-2 items-center">
            <span className='cursor-pointer' onClick={() => setVisibleForm('login')}>Login</span>
            <b>/</b>
            <span className='cursor-pointer' onClick={() => setVisibleForm('register')}>Register</span>
        </div>
        {
            visibleForm === 'login' ? <LoginForm setVisibleForm={setVisibleForm}/> : <RegisterForm setVisibleForm={setVisibleForm}/>
        }
    </Section>
  )
}

export default User