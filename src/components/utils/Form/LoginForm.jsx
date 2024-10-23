import React, { useState } from 'react'
import Form from '../../Layout/Form'
import Input from '../Inputs/Input'
import { useFormik } from 'formik'
import { loginUserSchema } from '../../schemas'
import { doSignInWithEmailAndPassoword } from '../../../firebase/auth'
import { useDispatch } from 'react-redux'
import { Loading } from '../../../redux/slices/settingSlice'

const LoginForm = () => {

  const [isUser, setIsUser] = useState({})

  const dispatch = useDispatch()

  const onSubmitHandler = async e => {
    dispatch(Loading(true))
    try {
      const res = await doSignInWithEmailAndPassoword(e.email, e.password)
      dispatch(Loading(false))
      setIsUser(res)
      localStorage.setItem('loggedInUser', JSON.stringify(res))
      window.location.href = '/'
      
    } catch (error) {
      dispatch(Loading(false))
      setIsUser(error)      
    }
  }

  const { values, errors, handleChange, handleSubmit } = useFormik({
    initialValues: {
      email:'',
      password: ''
    },
    validationSchema: loginUserSchema,
    onSubmit: onSubmitHandler,
    validateOnChange: false
  })

  // {moment(isUser?.user?.metadata?.creationTime).format('MMMM Do YYYY, h:mm:ss a')}
  return (
    <Form form="Login" >
      <Input error={errors.email} onChange={handleChange} name="email" value={values.email} placeholder="Enter your email" type="text"/>
      <Input error={errors.password} onChange={handleChange} name="password" value={values.password} placeholder="Enter your password" type="password"/>
      <button type='submit' className="btn" onClick={handleSubmit}>Login</button>
      {
        Object.keys(isUser)?.length >0  && (isUser?._tokenResponse?.registered ? <span className='text-sm'>User Successfully Login</span> : <span className='text-sm'>Invalid User</span>)
      }
    </Form>
  )
}

export default LoginForm