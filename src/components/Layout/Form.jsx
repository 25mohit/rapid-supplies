import React from 'react'
import { IoMdClose } from "react-icons/io";

const Form = props => {
  return (
    <form>
      <header className='flex items-center'>
        <div>
          <h2>{props.form}</h2>
        </div>
        <IoMdClose />
      </header>
      {props.children}
    </form>
  )
}

export default Form