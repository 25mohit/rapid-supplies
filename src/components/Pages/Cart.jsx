import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Section from '../HOC/Section'
import CartProduct from '../utils/Cards/CartProduct'
import { ClearCart, GetCartItems } from '../../redux/slices/cartSlice'
import { Fireworks } from 'fireworks-js'
import { useNavigate } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'

const Cart = () => {
    const [totalAmount, setTotalAmount] = useState(0)
    const [showFirework, setShowFirework] = useState(false)

    const cartItems = useSelector(state => state.cart.cartList)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(() => {
      setTotalAmount(cartItems?.reduce((acc, val) => acc+val.price, 0))      
    },[cartItems])

    const container = document.querySelector('.firework')

    const placeOrderHandler = () => {
      
      setShowFirework(true)
      const fireworks = new Fireworks(container, { /* options */ })
      console.log(container);
      fireworks.start()
    }
    
    const onClickHandler = () => {
      dispatch(ClearCart())
      setShowFirework(false)
      navigate('/')
    }
    console.log(cartItems);
    
  return (
    <Section>
      { cartItems?.length ? 
        <>
          <div className="header flex flex-wrap items-center justify-between">
            <h1 className='heading'>Cart</h1>
            <div className='flex items-center gap-4'>
              <div className='flex gap-2 items-center'>
                <span className='text-orange-400 font-bold'>Total</span>
                <h2 title='Total Cart Amount' className='italic cursor-pointer text-2xl text-green-500 font-bold'>AED {totalAmount.toFixed(2)}</h2>
              </div>
              <button className="btn" onClick={placeOrderHandler}>Place Order</button>
            </div>
          </div>
          <div className="items-container my-7 flex flex-col gap-7">
            <AnimatePresence>
              {
                cartItems?.map((item, index) => <CartProduct key={item.id} data={item} />)
              }
            </AnimatePresence>
          </div>
          <div className={`firework fixed ${showFirework ? 'pointer-events-auto' : 'pointer-events-none'}`}>
          {showFirework &&
            <div className="content fixed gap-4 flex flex-col items-center">
              <h1 className='text-2xl text-green-400 font-extrabold bg-white shadow-md'>Order Successfully Placed</h1>
              <p className='text-lg bg-white shadow-md'>It will be Delivered Soon</p>
              <button className="btn" onClick={onClickHandler}>Ok</button>
            </div>
          }
          </div> 
        </>:
        <div>
          <h1 className='text-lg italic'>No Data to Display</h1>
        </div>
      }
    </Section>
  )
}

export default Cart