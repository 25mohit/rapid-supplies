import React, { useCallback, useEffect, useState } from 'react'
import Product from '../utils/Cards/Product'
import Section from '../HOC/Section'
import { useDispatch, useSelector } from 'react-redux'
import { FetchProducts } from '../../redux/slices/productSlice'
import Input from '../utils/Inputs/Input'
import debounce from 'lodash.debounce'

// const shuffleArray = (array) => {
//   return array.sort(() => Math.random() - 0.5);
// }

const List = () => {

  const [listing, setListing] = useState([])
  const [search, setSearch] = useState('')

  const productsList = useSelector(state => state.product.productList)

  const dispatch = useDispatch()

  useEffect(() => {
    if(!productsList?.length || productsList === undefined || productsList === null){
      dispatch(FetchProducts())
    }
  },[])

  useEffect(() => {
    setListing(productsList)
  },[productsList])

  const debouncedFilter = useCallback(
    debounce((value) => {      
      setListing(productsList.filter(product => 
        product.heading.toLowerCase().includes(value.toLowerCase())
      ));
    }, 200),
    [productsList]
  );

  const handleChange = (e) => {
    const value = e.target.value;
    setSearch(value);
    debouncedFilter(value);
  };

  useEffect(() => {
    return () => {
      debouncedFilter.cancel();
    };
  }, [debouncedFilter]);
  
  return (
    <Section>
      <div className='flex flex-wrap md:flex-nowrap items-center gap-4'>
        <h1 className='heading'>Trending Products</h1>
        <Input type="text" value={search} placeholder="Enter Product title to search" onChange={handleChange}/>
      </div>
      <div className="product-grid">
        {
          listing?.map((product, index) => <Product key={index} product={product}/>)
        }
      </div>
    </Section>
  )
}

export default List