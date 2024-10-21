import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { AddItemToCart, SignInUser } from '../../../redux/slices/cartSlice'
import ReviewModal from '../Modals/ReviewModal'

const Product = () => {
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
        <img loading='lazy' src="https://pngimg.com/uploads/hoodie/hoodie_PNG24.png" alt="" />
        <div className="shadow"></div>
      </div>
      <section>
        <h1 className='text-xl font-bold'>Man Hoodie</h1>
        <p className='my-2 italic'>Mens latest hoodie in most beautiful colors. 100% Cotton Premium Design</p>
        <div className='flex justify-between items-center'>
          <span className='text-sm italic'>X, XL, 2XL</span>
          <span className='text-lg font-bold italic'>$20.99</span>
        </div>
        <div className='flex items-center justify-between my-2'>
          <select name="" id="" className='quantity'>
            <option value="">1</option>
          </select>
          <span title='Click to write a review' className='text-orange-400 review text-sm' onClick={() => setShowReviewModal(true)}>Write a review</span>
        </div>
        <button className="btn my-3 mt-4" onClick={addToCartHandler}>Add to Cart</button>
      </section>
      { showReviewModal && <>
        <div className="overlay" onClick={() => setShowReviewModal(false)}></div>
        <ReviewModal />
      </>}
    </div>
  )
}

export default Product