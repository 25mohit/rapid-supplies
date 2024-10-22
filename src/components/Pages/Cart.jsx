import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Section from '../HOC/Section'
import CartProduct from '../utils/Cards/CartProduct'
import { GetCartItems } from '../../redux/slices/cartSlice'

const Cart = () => {
    const cartItems = useSelector(state => state.cart.cartList)
    
    console.log("cart", cartItems);
    
  return (
    <Section>
      <div className="header">
        <h1 className='heading'>Cart</h1>
      </div>
      <div className="items-container my-7 flex flex-col gap-7">
        {
          cartItems?.map((item, index) => <CartProduct key={item.id} data={item} />)
        }
      </div>
    </Section>
  )
}

export default Cart