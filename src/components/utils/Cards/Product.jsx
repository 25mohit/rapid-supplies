import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { AddItemToCart, RemoveFromCart } from '../../../redux/slices/cartSlice'
import ReviewModal from '../Modals/ReviewModal'
import ReviewList from '../Modals/ReviewList'
import { Link } from 'react-router-dom'

const Product = ({ product }) => {
  const [reviewModalData, setReviewModalData] = useState({})
  const [reviewListData, setReviewListData] = useState({})
  const [isLoggedIn, setIsLoggedIn] = useState({})

  useEffect(() => {
    setIsLoggedIn(JSON.parse(localStorage.getItem('loggedInUser')))
  },[])

  const dispatch = useDispatch()

  const addToCartHandler = (payload) => {
    dispatch(AddItemToCart(payload))
  }

  const removeItemFromCart = (payload) => {
    dispatch(RemoveFromCart(payload))
  }  

  return (
    <div 
      className='product cursor-pointer mb-44'
      initial={{ opacity: 0, y: 20 }} 
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <div className="image-container">
        <img loading='lazy' src={product?.img} alt="" />
        <div className="shadow"></div>
      </div>
      <section className='flex flex-col justify-between'>
        <h1 className='text-xl font-bold'>{product?.heading}</h1>
        <p className='my-2 italic'>{product?.description}</p>
        <div className='flex justify-center items-center'>
          {/* { product?.sizes ? 
            <select name="" id="" className='quantity'>
              {product?.sizes?.map((size, index) => <option key={index}>{size}</option>)}
            </select> : 
          <span></span>} */}
          <span className='text-lg font-bold italic'><i className='font-normal text-sm mr-1'>AED</i>{product?.price}</span>
        </div>
        <div className='flex items-center justify-center my-2'>
            <div className='flex w-full justify-between'>
              <span title='Click to write a review' className='text-orange-400 review text-sm' onClick={() => setReviewModalData(product)}>Write a review</span>
              {product?.reviews?.length > 0 && <span className='text-sm mr-1 font-bold italic' onClick={() => setReviewListData(product?.reviews)}>{product?.reviews?.length} reviews</span>}
            </div>
        </div>
        {
          (isLoggedIn !== null && isLoggedIn !== undefined) ? 
          <>
          {product?.inCart ? <button className="btn remove my-3 mt-4 mx-auto" onClick={() => removeItemFromCart(product)}>Remove From Cart</button> :
           product?.inStock ? <button className="btn my-3 mt-4 mx-auto" onClick={() => addToCartHandler(product)}>Add to Cart</button> :
          <button className="btn no-stock my-3 mt-4 mx-auto">Out of Stock</button>} </> 
          : <Link to='user' className='btn mx-auto'>Login Please</Link>
        }
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