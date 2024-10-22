import React, { useEffect, useState } from 'react'
import Product from '../utils/Cards/Product'
import Section from '../HOC/Section'
import { useDispatch, useSelector } from 'react-redux'
import { FetchProducts } from '../../redux/slices/productSlice'
import Loader from '../utils/Loader'

const shuffleArray = (array) => {
  return array.sort(() => Math.random() - 0.5);
}

const List = () => {

  const productsList = useSelector(state => state.product.productList)

  console.log("productsList", productsList);
  
  const dispatch = useDispatch()

  useEffect(() => {
    if(!productsList?.length || productsList == undefined || productsList == null){
      dispatch(FetchProducts())
    }
  },[])

  const shuffledList = productsList?.length ? shuffleArray([...productsList]) : []
  
  return (
    <Section>
      <h1 className='heading'>Trending Products</h1>
      <div className="product-grid">
        {
          shuffledList?.map((product, index) => <Product key={index} product={product}/>)
        }
      </div>
    </Section>
  )
}

export default List