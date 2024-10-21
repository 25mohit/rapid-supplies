import React from 'react'

const Input = props => {
  const { type, placeholder } = props
  
  return (
    <div>
        <label htmlFor="">{placeholder}</label>
        <input type={type} />
    </div>
  )
}

export default Input