import React from 'react'
import AuthWrapper from "../HOC/AuthWrapper"
import Section from '../HOC/Section'
import DataTable from '../utils/Table/Table'

const Dashboard = () => {
  return (
    <AuthWrapper>
      <Section>
        <div className="statistics">
        
        </div>
        <div className="table w-full p-1 bg-blue-100 rounded-md h-full">
          
          <DataTable />
        </div>
      </Section>
    </AuthWrapper>
  )
}

export default Dashboard