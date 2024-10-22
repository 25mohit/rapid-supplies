import React, { useEffect } from 'react'
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

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(FetchProducts())
  },[])

  const shuffledProducts = shuffleArray([...productsList]);
  
  return (
    <Section>
      <h1 className='heading'>Trending Products</h1>
      <div className="product-grid">
        {
          shuffledProducts?.length ? shuffledProducts?.map((product, index) => <Product key={index} product={product}/>) :
          <Loader />
        }
      </div>
    </Section>
  )
}

export default List