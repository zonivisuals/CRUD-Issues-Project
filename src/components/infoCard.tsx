import React from 'react'

interface InfoCardProps {
    title: string;
    totalRequests: number;
    monthlyRequests: number;
  }

const infoCard = (props: InfoCardProps) => {
  return (
    <div className='flex flex-col p-5 border border-white border-opacity-15 rounded-2xl w-56 bg-[#F8F6FF]/[0.04]'>
        <p className='text-[#BEBBCE] text-sm'>{props.title}</p>
        
        <div className='flex flex-row items-end gap-1 text-white'>
            <p className='text-2xl font-medium'>{props.totalRequests}</p>
            <span className='text-base font-medium'>requests</span>
        </div>
        
        <div className='flex flex-row items-center gap-1 mt-3'>
            <p className='text-base font-semibold text-[#4ADE80]'>+ {props.monthlyRequests} new</p>
            <p className='text-sm font-normal text-[#BEBBCE]'>in this month</p>
        </div>
    </div>
  )
}

export default infoCard