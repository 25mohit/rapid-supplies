import React from 'react'

const Statistics = ({ heading, count }) => {
  return (
    <div className='statistics rounded-md cursor-pointer text-center shadow-md'>
        <h2 className='capitalize font-bold text-gray-600'>{heading}</h2>
        <span className='text-orange-500 italic'>{count}</span>
    </div>
  )
}

export default Statistics