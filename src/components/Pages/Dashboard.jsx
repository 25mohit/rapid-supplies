import React from 'react'
import AuthWrapper from "../HOC/AuthWrapper"
import Section from '../HOC/Section'
import DataTable from '../utils/Table/Table'

const Dashboard = () => {
  return (
    <AuthWrapper>
      <Section>
        <div className="table p-1 bg-red-400 h-full">
          
          <DataTable />
        </div>
      </Section>
    </AuthWrapper>
  )
}

export default Dashboard