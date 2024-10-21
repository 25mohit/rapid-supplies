import React from 'react'
import Form from '../../Layout/Form'
import Input from '../Inputs/Input'

const LoginForm = ({setVisibleForm}) => {
  return (
    <Form form="Login">
      <Input placeholder="Enter your email" type="text"/>
      <Input placeholder="Enter your password" type="password"/>
    </Form>
  )
}

export default LoginForm