import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Section from '../HOC/Section'
import CartProduct from '../utils/Cards/CartProduct'
import { GetCartItems } from '../../redux/slices/cartSlice'
import { Fireworks } from 'fireworks-js'

const Cart = () => {
    const [totalAmount, setTotalAmount] = useState(0)
    const [showFirework, setShowFirework] = useState(false)

    const cartItems = useSelector(state => state.cart.cartList)

    useEffect(() => {
      setTotalAmount(cartItems?.reduce((acc, val) => acc+val.price, 1))      
    },[cartItems])

    const placeOrderHandler = () => {
      
      setShowFirework(true)
      const container = document.querySelector('.firework')
      console.log(container);
      
      const fireworks = new Fireworks(container, { /* options */ })
      fireworks.start()
    }
    
    const onClickHandler = () => {
      const container = document.querySelector('.firework')
      const fireworks = new Fireworks(container, { /* options */ })
      fireworks.stop()
      setShowFirework(false)
    }
  return (
    <Section>
      <div className="header flex items-center justify-between">
        <h1 className='heading'>Cart</h1>
        <div className='flex items-center gap-4'>
          <div className='flex gap-2 items-center'>
            <span className='text-orange-400 font-bold'>Total</span>
            <h2 title='Total Cart Amount' className='italic cursor-pointer text-2xl text-green-500 font-bold'>AED {totalAmount}</h2>
          </div>
          <button className="btn" onClick={placeOrderHandler}>Place Order</button>
        </div>
      </div>
      <div className="items-container my-7 flex flex-col gap-7">
        {
          cartItems?.map((item, index) => <CartProduct key={item.id} data={item} />)
        }
      </div>
       <div className={`firework fixed ${showFirework ? 'pointer-events-auto backdrop-blur-sm' : 'pointer-events-none'}`}>
      {showFirework &&
        <div className="content fixed gap-4 flex flex-col items-center">
          <h1 className='text-2xl text-green-400 font-extrabold'>Order Successfully Placed</h1>
          <p className='text-lg'>It will be Delivered Soon</p>
          <button className="btn" onClick={onClickHandler}>Ok</button>
        </div>
      }
      </div>
    </Section>
  )
}

export default Cart