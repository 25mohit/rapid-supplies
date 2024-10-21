import React from 'react'
import Product from '../utils/Cards/Product'
import Section from '../HOC/Section'

const List = () => {
  return (
    <Section>
      <h1 className='heading'>List</h1>
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
        <Product />
        <Product />
        <Product />
      </div>
    </Section>
  )
}

export default List