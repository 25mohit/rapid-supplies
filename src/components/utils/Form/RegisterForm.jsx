import React from 'react'
import Form from '../../Layout/Form'
import Input from '../Inputs/Input'
import { useFormik } from 'formik'
import { registerUserSchema } from '../../schemas'

const RegisterForm = ({setVisibleForm}) => {
  
  const onSubmitHandler = e => {
    console.log("Submited")
  }

  const { values, errors, handleChange, handleSubmit } = useFormik({
    initialValues: {
      name: '',
      email:'',
      password: '',
      confirmPassword: ''
    },
    validationSchema: registerUserSchema,
    onSubmit: onSubmitHandler,
    validateOnChange: false
  })

  return (
    <Form form="Register">
      <Input value={values.name} onChange={handleChange} error={errors.name} type="text" placeholder="Enter your Name"/>
      <Input value={values.email} onChange={handleChange} error={errors.email} type="text" placeholder="Enter your Email"/>
      <Input value={values.password} onChange={handleChange} error={errors.password} type="password" placeholder="Enter your Password"/>
      <Input value={values.confirmPassword} onChange={handleChange} error={errors.confirmPassword} type="password" placeholder="Confirm Password"/>
      <button type='submit' onClick={handleSubmit} className="btn">Register</button>
    </Form>
  )
}

export default RegisterForm