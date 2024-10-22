import React, { useState } from 'react'
import Form from '../../Layout/Form'
import Input from '../Inputs/Input'
import { useFormik } from 'formik'
import { loginUserSchema } from '../../schemas'
import { doSignInWithEmailAndPassoword } from '../../../firebase/auth'
import moment from 'moment/moment'

const LoginForm = ({setVisibleForm}) => {

  const [isUser, setIsUser] = useState({})

  const onSubmitHandler = async e => {
    console.log("Submited")
    try {
      const res = await doSignInWithEmailAndPassoword(e.email, e.password)
      setIsUser(res)
      localStorage.setItem('loggedInUser', JSON.stringify(res))
      window.location.href = '/'
      console.log(res);
      
    } catch (error) {
      setIsUser(error)
      console.log(error);
      
    }
  }

  console.log("isUSer", isUser, isUser?.user?.metadata?.createdAt);
  

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
        Object.keys(isUser)?.length >0  && (isUser?._tokenResponse?.registered ? <span>User Successfully Login</span> : <span>Invalid User</span>)
      }
    </Form>
  )
}

export default LoginForm