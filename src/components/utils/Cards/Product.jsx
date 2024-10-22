import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { AddItemToCart, SignInUser } from '../../../redux/slices/cartSlice'
import ReviewModal from '../Modals/ReviewModal'

const Product = ({ product }) => {
  const [showReviewModal, setShowReviewModal] = useState(false)

  const dispatch = useDispatch()

  const addToCartHandler = () => {
    const payload = {
      img: 'https://pngimg.com/uploads/hoodie/hoodie_PNG24.png',
      title: 'Mens latest hoodie in most beautiful colors. 100% Cotton Premium Design',
      price: '20.99',
      quantity: 5
    }
    dispatch(AddItemToCart(payload))
  }
  

  return (
    <div className='product cursor-pointer mb-44'>
      <div className="image-container">
        <img loading='lazy' src={product?.img} alt="" />
        <div className="shadow"></div>
      </div>
      <section className='flex flex-col justify-between'>
        <h1 className='text-xl font-bold'>{product?.heading}</h1>
        <p className='my-2 italic'>{product?.description}</p>
        <div className='flex justify-between items-center'>
          { product?.sizes ? 
            <select name="" id="" className='quantity'>
              {product?.sizes?.map((size, index) => <option>{size}</option>)}
            </select> : 
          <span></span>}
          <span className='text-lg font-bold italic'><i className='font-normal text-sm mr-1'>AED</i>{product?.price}</span>
        </div>
        <div className='flex items-center justify-between my-2'>
          { product?.maxQuantity ? 
            <select name="" id="" className='quantity'>
              {
                [...Array(product?.maxQuantity)]?.map((_, quantity) => <option key={quantity} value={quantity+1}>{quantity+1}</option>)
              }
            </select> : ''}
          <span title='Click to write a review' className='text-orange-400 review text-sm' onClick={() => setShowReviewModal(true)}>Write a review</span>
        </div>
        <button className="btn my-3 mt-4 mx-auto" onClick={addToCartHandler}>Add to Cart</button>
      </section>
      { showReviewModal && <>
        <div className="overlay" onClick={() => setShowReviewModal(false)}></div>
        <ReviewModal />
      </>}
    </div>
  )
}

export default Product