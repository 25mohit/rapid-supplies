import React from 'react'
import { useSelector } from 'react-redux'

const Cart = () => {
    const cart = useSelector(state => state.cart.cartList)
    
  return (
    <div>Cart</div>
  )
}

export default Cart