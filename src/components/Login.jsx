import React, { useState } from 'react'
import { useAuth } from '../contexts/authContexts'
import { doSignInWithEmailAndPassoword, doSignInWithGoogle } from '../firebase/auth'
import { replace, useNavigate } from 'react-router-dom'

const Login = () => {
    
    const [formData, setFormData] = useState({})
    const [isSignIn, setIsSignIn] = useState(false)

    const navigate = useNavigate()

    const onSubmitHandler = async (e) => {
        e.preventDefault()
        if(!isSignIn){
            setIsSignIn(true)
            try {
                await doSignInWithEmailAndPassoword(formData.email, formData.password)
            } catch (error) {
                console.log(error, error.code);  
            }
        }
    }

    const onSignInWithGoogle = async (e) => {
        e.preventDefault()
        if(!isSignIn){
            setIsSignIn(true)
            await doSignInWithGoogle(formData.email, formData.password).catch(err => {
                setIsSignIn(false)
            })
        }
    }

  return (
    <div>
        {/* {userLoggedIn && (navigate(to='/'))} */}
        <form action="post">
            <input type="text" placeholder='Email' onChange={e => setFormData({...formData, ['email']:e.target.value})} value={formData.email}/>
            <input type="password" placeholder='Password' onChange={e => setFormData({...formData, ['password']:e.target.value})} value={formData.password}/>
            <button onClick={onSubmitHandler}>Submit</button>
        </form>
    </div>
  )
}

export default Login