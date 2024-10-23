import React from 'react'
import Form from '../../Layout/Form'
import Input from '../Inputs/Input'
import { toast } from 'react-toastify'

const CategoryAdd = () => {
    
    const onClickHandler = e => {
        e.preventDefault()
        toast.warn("This is a Demo Form")
    }

  return (
    <div className='add-form fixed z-20'>
        <Form form="Add new Category">
            <Input placeholder="Enter Category title"/>
            <Input placeholder="Enter Category Description"/>
            <button className='btn' onClick={onClickHandler}>Add Category</button>
        </Form>
    </div>
  )
}

export default CategoryAdd