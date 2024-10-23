import React, { useState } from 'react'
import Form from '../../Layout/Form'
import Input from '../Inputs/Input'
import { useFormik } from 'formik'
import { registerUserSchema } from '../../schemas'
import { doCreateUserWithEmailAndPassword } from '../../../firebase/auth'
import { useDispatch } from 'react-redux'
import { Loading } from '../../../redux/slices/settingSlice'
import { toast } from "react-toastify";

const RegisterForm = ({setVisibleForm}) => {
  
  const [isRegistered, setIsRegistered] = useState({})

  const dispatch = useDispatch()

  const onSubmitHandler = async values => {
    dispatch(Loading(true))
    try {
      const res = await doCreateUserWithEmailAndPassword(values.email, values.password); // Trigger Google sign-in
      dispatch(Loading(false))
      setIsRegistered(res)
      toast.success("Successfully Resigtered")
      setTimeout(() => {
        setVisibleForm('login')
      },600)
    } catch (error) {
      dispatch(Loading(false))
    }

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
      <Input value={values.name} onChange={handleChange} name='name' error={errors.name} type="text" placeholder="Enter your Name"/>
      <Input value={values.email} onChange={handleChange} name='email' error={errors.email} type="text" placeholder="Enter your Email"/>
      <Input value={values.password} onChange={handleChange} name='password' error={errors.password} type="password" placeholder="Enter your Password"/>
      <Input value={values.confirmPassword} onChange={handleChange} name='confirmPassword' error={errors.confirmPassword} type="password" placeholder="Confirm Password"/>
      <button type='submit' onClick={handleSubmit} className="btn">Register</button>
      {
        Object.keys(isRegistered).length > 0 && (isRegistered?.user?.uid !== undefined ? <span className='text-sm'>Registered Successfully</span> : <span className='text-sm'>Unable to Create, please refresh and try again</span>)
      }
    </Form>
  )
}

export default RegisterForm