import React from 'react'
import { IoMdClose } from "react-icons/io";
import Reviews from '../Reviews';

const ReviewList = ({ data, setReviewListData }) => {
    
  return (
    <div className='fixed z-20 shadow-lg rounded-lg gap-3 flex flex-col p-4 review-list'>
        <header className='flex justify-between items-center'>
            <h1 className="heading">Reviews</h1>
            <IoMdClose onClick={() => setReviewListData(false)} title="Close Review Modal" className='text-2xl'/>
        </header>
        <div>
            {
                data?.map((elem, index) =>
                    <div key={index} className='flex items-center gap-3 mb-2 review-row'>
                        <Reviews rating={elem?.star}/>
                        <div className='flex flex-col text-left'>
                            <span className='font-bold' title="Review Title">{elem?.review}</span>
                            <span className='text-sm' title='Review Dscription'>{elem?.desc}</span>
                        </div>
                    </div>)
            }
        </div>
    </div>
  )
}

export default ReviewList