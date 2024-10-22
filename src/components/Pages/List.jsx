import React, { useEffect } from 'react'
import Product from '../utils/Cards/Product'
import Section from '../HOC/Section'
import { useDispatch, useSelector } from 'react-redux'
import { FetchProducts } from '../../redux/slices/productSlice'

const List = () => {

  const productsList = useSelector(state => state.product.productList)

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(FetchProducts())
  },[])
  console.log("productsList", productsList);
  
  return (
    <Section>
      <h1 className='heading'>List</h1>
      <div className="product-grid">
        {
          productsList?.[0]?.map((product, index) => <Product key={index} product={product}/>)
        }
        {/* <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product /> */}
      </div>
    </Section>
  )
}

export default List