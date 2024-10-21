import React from 'react'
import Form from '../../Layout/Form'
import Input from '../Inputs/Input'

const RegisterForm = ({setVisibleForm}) => {
  return (
    <Form form="Register">
      <Input type="text" placeholder="Enter your Name"/>
      <Input type="text" placeholder="Enter your Email"/>
      <Input type="password" placeholder="Enter your Password"/>
      <Input type="password" placeholder="Confirm Password"/>
      <button className="btn">Register</button>
    </Form>
  )
}

export default RegisterForm