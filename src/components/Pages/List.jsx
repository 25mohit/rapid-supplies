import React from 'react'
import Product from '../utils/Cards/Product'
import Section from '../HOC/Section'

const List = () => {
  return (
    <Section>
      <h1 className='mb-44'>List</h1>
      <div className="product-grid">
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

      </div>
    </Section>
  )
}

export default List