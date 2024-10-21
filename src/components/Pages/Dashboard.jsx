import React from 'react'
import AuthWrapper from "../HOC/AuthWrapper"
import Section from '../HOC/Section'
import DataTable from '../utils/Table/Table'
import Statistics from '../utils/Cards/Statistics'
import { FaBoxOpen } from "react-icons/fa";
import { FaRegStickyNote } from "react-icons/fa";

const Dashboard = () => {
  return (
    <AuthWrapper>
      <Section>
        <header className='flex justify-between'>
          <div className="stats-container items-center pb-7 flex gap-6">
            <Statistics heading="products" count={15}/>
            <Statistics heading="category" count={2}/>
            <Statistics heading="sold" count={30}/>
          </div>
          <div className="controls flex items-center flex-col gap-2">
            <button className="btn"><FaBoxOpen />Add new Product</button>
            <button className="btn"><FaRegStickyNote />Add new Category</button>
          </div>
        </header>
        <div className="table w-full p-1 bg-blue-100 rounded-md h-full">
          
          <DataTable />
        </div>
      </Section>
    </AuthWrapper>
  )
}

export default Dashboard