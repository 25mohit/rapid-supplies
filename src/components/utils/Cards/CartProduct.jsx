import React from 'react'
import { Link } from 'react-router-dom';
import { IoPrintOutline } from "react-icons/io5";
import { useDispatch } from 'react-redux';
import { RemoveFromCart } from '../../../redux/slices/cartSlice';
import Reviews from '../Reviews';
import { motion } from 'framer-motion';

const CartProduct = ({ data }) => {
    const dispatch = useDispatch()
    
    const removeItemFromCart = () => {        
        dispatch(RemoveFromCart(data))
    }

  return (
    <motion.div
        className='cart-product flex flex-wrap justify-between shadow-lg rounded-md px-3 py-5 transition ease-in hover:shadow-xl'
        // initial={{ opacity: 0, x: 100 }}      // Initial animation when entering
        // animate={{ opacity: 1, x: 0 }}        // Animation when item is displayed
        exit={{ opacity: 0, x: -100 }}        // Exit animation for smooth removal
        transition={{ duration: 0.5 }}        // Controls the speed of animations
    >
        <section className='flex gap-5'>
            <div className="image">
                <img loading='lazy' src={data?.img} alt="" />
            </div>
            <div className="content flex flex-col gap-3">
                <h1 title='Product Title' className='text-lg'>{data?.heading}</h1>
                <div className='flex flex-col gap-1'>
                    <p title='Product Description' className='text-gray-500'>{data?.description}</p>
                    {data?.reviews?.[0]?.star && <Reviews rating={data?.reviews?.[0]?.star}/>}
                    <div className='flex items-center gap-2'>
                        {/* <select  name="" id="" className='quantity cursor-pointer'>
                            <option value="">4</option>
                        </select> */}
                        <p className='text-xl font-bold italic text-orange-600'>AED {data?.price}</p>
                    </div>
                </div>
            </div>
        </section>
        <section className='mr-2 text-sm flex flex-col items-center justify-between w-full md:w-fit gap-4 sm:gap-4'>
            <div className='flex flex-col gap-2 w-full text-right'>
                <span title='Order id' className='text-gray-400'>ORDER # 403-4017630-9343536</span>
                <div className='flex justify-between'>
                    <Link className='text-blue-500'>View order details</Link>
                    <Link title='Print Invoice' className='text-blue-500 flex items-center gap-1'><IoPrintOutline /> Invoice</Link>
                </div>
            </div>
            <div className='flex justify-center flex-wrap gap-4'>
                <button className="btn remove" onClick={removeItemFromCart}>Remove From Cart</button>
                <button className="btn">Contact Seller</button>
            </div>
        </section>
    </motion.div>
  )
}

export default CartProduct