import React from 'react'
import { FaStar } from 'react-icons/fa6';
import { IoMdClose } from "react-icons/io";
import Reviews from '../Reviews';

const ReviewList = ({ data, setReviewListData }) => {
    console.log("data", data);
    
  return (
    <div className='fixed z-20 shadow-lg rounded-lg gap-3 flex flex-col p-4 review-list'>
        <header className='flex justify-between items-center'>
            <h1 className="heading">Reviews</h1>
            <IoMdClose onClick={() => setReviewListData(false)} title="Close Review Modal" className='text-2xl'/>
        </header>
        <div>
            {
                data?.map((elem, index) =>
                    <div key={index} className='flex items-center gap-3 mb-2 border-b-2 pb-3'>
                        <Reviews rating={data?.star}/>
                        <div className='text-yellow-400 flex items-center gap-2 text-2xl'>
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                        </div>
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