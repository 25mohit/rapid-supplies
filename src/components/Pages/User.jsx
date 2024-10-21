import React, { useState } from 'react'
import LoginForm from '../utils/Form/LoginForm'
import RegisterForm from '../utils/Form/RegisterForm'
import Section from '../HOC/Section'

const User = () => {
    const [visibleForm, setVisibleForm] = useState('login')

  return (
    <Section>
      <div className="flex flex-col h-full items-center pt-32">
        <div className="toogler flex gap-2 mb-6 items-center">
            <span className={`cursor-pointer text-gray-400 ${visibleForm === 'login' ? 'active' : ''}`} onClick={() => setVisibleForm('login')}>Login</span>
            <b className='text-gray-400 select-none'>/</b>
            <span className={`cursor-pointer text-gray-400 ${visibleForm === 'register' ? 'active' : ''}`} onClick={() => setVisibleForm('register')}>Register</span>
        </div>
        {
            visibleForm === 'login' ? <LoginForm setVisibleForm={setVisibleForm}/> : <RegisterForm setVisibleForm={setVisibleForm}/>
        }
      </div>
    </Section>
  )
}

export default User