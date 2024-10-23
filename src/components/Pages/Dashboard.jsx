import React, { useState } from 'react'
import AuthWrapper from "../HOC/AuthWrapper"
import Section from '../HOC/Section'
import DataTable from '../utils/Table/Table'
import Statistics from '../utils/Cards/Statistics'
import { FaBoxOpen } from "react-icons/fa";
import { FaRegStickyNote } from "react-icons/fa";
import ProductAdd from '../utils/Form/ProductAdd'
import CategoryAdd from '../utils/Form/CategoryAdd'

const Dashboard = () => {
  
  const [showAddForm, setShowAddForm] = useState(false)
  const [showCategory, setShowCategory] = useState(false)
  
  return (
    <AuthWrapper>
      <Section>
        <header className='flex  flex-wrap justify-between'>
          <div className="stats-container items-center pb-7 flex gap-6">
            <Statistics heading="products" count={15}/>
            <Statistics heading="category" count={2}/>
            <Statistics heading="sold" count={30}/>
          </div>
          <div className="controls flex justify-center w-full md:w-fit items-center flex-col gap-2">
            <button className="btn" onClick={() => setShowAddForm(true)}><FaBoxOpen />Add new Product</button>
            <button className="btn" onClick={() => setShowCategory(true)}><FaRegStickyNote />Add new Category</button>
          </div>
        </header>
        <div className="table p-1 bg-blue-100 rounded-md h-full"> 
          <DataTable />
        </div>
      </Section>
      {
        showAddForm && <>
          <div className="overlay" onClick={() => setShowAddForm(false)}></div>
          <ProductAdd />
        </>
      }
      {
        showCategory && <>
          <div className="overlay" onClick={() => setShowCategory(false)}></div>
          <CategoryAdd />
        </>
      }
    </AuthWrapper>
  )
}

export default Dashboard