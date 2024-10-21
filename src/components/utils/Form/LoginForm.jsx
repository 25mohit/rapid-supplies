import React from 'react'
import Form from '../../Layout/Form'
import Input from '../Inputs/Input'
import { useFormik } from 'formik'
import { loginUserSchema } from '../../schemas'

const LoginForm = ({setVisibleForm}) => {

  const onSubmitHandler = e => {
    // e.preventDefault()
    console.log("Submited")
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


  console.log(values, errors);
  
  
  return (
    <Form form="Login" >
      <Input error={errors.email} onChange={handleChange} name="email" value={values.email} placeholder="Enter your email" type="text"/>
      <Input error={errors.password} onChange={handleChange} name="password" value={values.password} placeholder="Enter your password" type="password"/>
      <button type='submit' className="btn" onClick={handleSubmit}>Login</button>
    </Form>
  )
}

export default LoginForm