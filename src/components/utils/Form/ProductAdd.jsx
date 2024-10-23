import React from 'react'
import Form from '../../Layout/Form'
import Input from '../Inputs/Input'
import { toast } from 'react-toastify'

const ProductAdd = () => {
    
    const onClickHandler = e => {
        e.preventDefault()
        toast.warn("This is a Demo Form")
    }

  return (
    <div className='add-form fixed z-20'>
        <Form form="Add new Product">
            <Input placeholder="Enter Product title"/>
            <Input placeholder="Cateogry"/>
            <Input placeholder="Enter Product Description"/>
            <Input placeholder="Price"/>
            <Input placeholder="SKU"/>
            <button className='btn' onClick={onClickHandler}>Add Product</button>
        </Form>
    </div>
  )
}

export default ProductAdd