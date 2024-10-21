import React from 'react'
import { useSelector } from 'react-redux'
import Section from '../HOC/Section'
import CartProduct from '../utils/Cards/CartProduct'

const Cart = () => {
    const cart = useSelector(state => state.cart.cartList)
    
  return (
    <Section>
      <div className="header">
        <h1 className='heading'>Cart</h1>
      </div>
      <div className="items-container my-7 flex flex-col gap-7">
        <CartProduct />
        <CartProduct />
        <CartProduct />
        <CartProduct />
        <CartProduct />
        <CartProduct />
      </div>
    </Section>
  )
}

export default Cart