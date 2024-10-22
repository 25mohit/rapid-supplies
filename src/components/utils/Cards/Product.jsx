import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { AddItemToCart, SignInUser } from '../../../redux/slices/cartSlice'
import ReviewModal from '../Modals/ReviewModal'
import ReviewList from '../Modals/ReviewList'

const Product = ({ product }) => {
  const [reviewModalData, setReviewModalData] = useState({})
  const [reviewListData, setReviewListData] = useState({})

  const dispatch = useDispatch()

  const addToCartHandler = (payload) => {
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
              {product?.sizes?.map((size, index) => <option key={index}>{size}</option>)}
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
            <div>
              {product?.reviews?.length > 0 && <span className='text-sm mr-1 font-bold italic' onClick={() => setReviewListData(product?.reviews)}>{product?.reviews?.length} reviews</span>}
              <span title='Click to write a review' className='text-orange-400 review text-sm' onClick={() => setReviewModalData(product)}>Write a review</span>
            </div>
        </div>
        <button className="btn my-3 mt-4 mx-auto" onClick={() => addToCartHandler(product)}>Add to Cart</button>
      </section>
      { reviewListData?.length ? <>
        <div className="overlay" onClick={() => setReviewListData({})}></div>
        <ReviewList data={reviewListData} setReviewListData={setReviewListData}/>
      </> : ''}
      { Object.keys(reviewModalData)?.length ? <>
        <div className="overlay" onClick={() => setReviewModalData({})}></div>
        <ReviewModal data={reviewModalData}/>
      </> : ''}
    </div>
  )
}

export default Product