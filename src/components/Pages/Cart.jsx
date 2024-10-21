import React from 'react'
import { useSelector } from 'react-redux'

const Cart = () => {
    const cart = useSelector(state => state.cart)
    console.log("cart", cart);
    
  return (
    <div>Cart</div>
  )
}

export default Cart