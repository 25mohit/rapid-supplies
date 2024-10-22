import React from 'react'
import { FaStar } from 'react-icons/fa6'
import Input from '../Inputs/Input'
import Textarea from '../Inputs/Textarea'
import { useDispatch } from 'react-redux'
import { SaveProductReview } from '../../../redux/slices/productSlice'

const ReviewModal = ({ data }) => {

  console.log("data", data);
  
  const dispatch = useDispatch()

  const onSubmitHandler = () => {
    const payload = {
      star: 4.5,
      review: 'Very Untilmate Product',
      desc: 'Great Description',
      id: data?.id,
      name: 'User Name'
    }
    dispatch(SaveProductReview(payload))
  }
  return (
    <div className='fixed h-fit p-4 review-modal shadow-lg rounded-lg gap-3 flex flex-col'>
      <header className='flex justify-between items-center'>
        <div className='flex flex-col gap-3'>
          <h1 className='heading'>Ovewall rating</h1>
          <div className='text-yellow-400 flex items-center gap-2 text-2xl'>
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>
        </div>
        <div className="w-20">
          <img src={data?.img} alt="" />
        </div>
      </header>
      <Input placeholder="Enter Review title"/>
      <Textarea placeholder="Enter Review description"/>
      <span className='flex items-center gap-1'>
        <input type="checkbox" name="" id="accept" />
        <label htmlFor="accept" className='text-sm'>I accept the <b>terms and conditions</b></label>
      </span>
      <span className='text-left text-xs text-orange-400'><b>Note:</b> Once you submit review it can't be update or removed in future</span>
      <button className="btn" onClick={onSubmitHandler}>Submit product review</button>
    </div>
  )
}

export default ReviewModal