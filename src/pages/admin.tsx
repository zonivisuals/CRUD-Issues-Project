import React from 'react'
import InfoCard from '../components/infoCard'
import IssuesTable from '../components/issuesTable'

const admin = () => {
  return (
    <div className='py-8 flex flex-col gap-8'>
      <div className='flex items-center justify-start gap-5'>
        <InfoCard title="All Feedback" totalRequests={1084} monthlyRequests={30} />
        <InfoCard title="Solved" totalRequests={1084} monthlyRequests={30} />
        <InfoCard title="Pending" totalRequests={1084} monthlyRequests={30} />
        <InfoCard title="In Progress" totalRequests={1084} monthlyRequests={30} />
      </div>
        <IssuesTable />
    </div>
  )
}

export default admin