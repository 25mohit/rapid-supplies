import React, { useState } from 'react'
import { FaStar } from 'react-icons/fa6'
import Input from '../Inputs/Input'
import Textarea from '../Inputs/Textarea'
import { useDispatch } from 'react-redux'
import { SaveProductReview } from '../../../redux/slices/productSlice'
import { ratingSchema } from '../../schemas'
import { useFormik } from 'formik'

const ReviewModal = ({ data }) => {

  const [rating, setRating] = useState(0)
  
  const dispatch = useDispatch()

  const onSubmitHandler = () => {
    const payload = {
      star: rating,
      review: values.title,
      desc: values.desc,
      id: data?.id
    }
    dispatch(SaveProductReview(payload))
  }

  const { values, errors, handleChange, handleSubmit, setFieldValue } = useFormik({
    initialValues: {
      title: '',
      desc:'',
      termsAccepted: false
    },
    validationSchema: ratingSchema,
    onSubmit: onSubmitHandler,
    validateOnChange: false
  })
  
  return (
    <div className='fixed h-fit p-4 review-modal shadow-lg rounded-lg gap-3 flex flex-col'>
      <header className='flex justify-between items-center'>
        <div className='flex flex-col gap-3'>
          <h1 className='heading'>Ovewall rating</h1>
          <div className='text-yellow-400 flex items-center gap-2 text-2xl'>
            {
              Array.from([1,2,3,4,5]).map((d, index) => <FaStar onClick={() => setRating(index+1)} key={index}/>)
            }
            {rating > 0 && <span className='text-sm'>{rating}</span> }
          </div>
        </div>
        <div className="w-20">
          <img src={data?.img} alt="" />
        </div>
      </header>
      <Input error={errors.title} value={values.title} onChange={handleChange} name='title' placeholder="Enter Review title"/>
      <Textarea error={errors.desc} value={values.desc} onChange={handleChange} name='desc' placeholder="Enter Review description"/>
      <span className='flex items-center gap-1'>
        <input type="checkbox" name="termsAccepted" checked={values.termsAccepted} onChange={() => setFieldValue('termsAccepted', !values.termsAccepted)} id="accept" />
        {
          errors?.termsAccepted ? <label htmlFor='accept' className='text-sm text-red-500 font-bold'>{errors.termsAccepted}</label> :
          <label htmlFor="accept" className='text-sm'>I accept the <b>terms and conditions</b></label>
        }
      </span>
      <span className='text-left text-xs text-orange-400'><b>Note:</b> Once you submit review it can't be update or removed in future</span>
      <button type='submit' className="btn" onClick={handleSubmit}>Submit product review</button>
    </div>
  )
}

export default ReviewModal