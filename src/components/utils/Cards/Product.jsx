import React from 'react'

const Product = () => {
  return (
    <div className='product cursor-pointer mb-44'>
      <div className="image-container">
        <img src="https://pngimg.com/uploads/hoodie/hoodie_PNG24.png" alt="" />
        <div className="shadow"></div>
      </div>
      <section>
        <h1 className='text-xl font-bold'>Man Hoodie</h1>
        <p className='my-2'>Mens latest hoodie in most beautiful colors. 100% Cotton Premium Design</p>
        <div className='flex justify-between items-center'>
          <span className='text-sm italic'>X, XL, 2XL</span>
          <span className='text-lg font-bold italic'>$20.99</span>
        </div>
        <button className="btn my-3 mt-4">Add to Cart</button>
      </section>
    </div>
  )
}

export default Product