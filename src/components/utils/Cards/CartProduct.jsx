import React from 'react'
import { FaStar } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { IoPrintOutline } from "react-icons/io5";

const CartProduct = () => {
    
  return (
    <div className='cart-product flex flex-wrap justify-between shadow-lg rounded-md px-2 py-4 transition ease-in hover:shadow-xl'>
        <section className='flex gap-1'>
            <div className="image ">
                <img loading='lazy' src="https://pngimg.com/uploads/hoodie/hoodie_PNG24.png" alt="" />
            </div>
            <div className="content flex flex-col gap-3">
                <h1 title='Product Title' className='text-lg'>Mens Hoodie - RED Color</h1>
                <div className='flex flex-col gap-1'>
                    <p title='Product Description' className='text-gray-500'>Mens latest hoodie in most beautiful colors. 100% Cotton Premium Design</p>
                    <span title='Reviews' className='flex items-center gap-1 text-yellow-300'>
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                    </span>
                    <div className='flex items-center gap-2'>
                        <select  name="" id="" className='quantity cursor-pointer'>
                            <option value="">4</option>
                        </select>
                        <p className='text-xl font-bold italic text-orange-600'>$45.99</p>
                    </div>
                </div>
            </div>
        </section>
        <section className='mr-2 text-sm flex flex-col justify-between w-full md:w-fit gap-4 sm:gap-4'>
            <div className='flex flex-col gap-2'>
                <span title='Order id' className='text-gray-400'>ORDER # 403-4017630-9343536</span>
                <div className='flex justify-between'>
                    <Link className='text-blue-500'>View order details</Link>
                    <Link title='Print Invoice' className='text-blue-500 flex items-center gap-1'><IoPrintOutline /> Invoice</Link>
                </div>
            </div>
            <button className="btn">Contact Seller</button>
        </section>
    </div>
  )
}

export default CartProduct