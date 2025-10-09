import React from 'react'

const Dashboard = () => {
  return (
    <div className='p-4 bg-white rounded-lg shadow-md m-4'>
      
      <h1 className='text-2xl font-bold mb-4'>Dashboard</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
        <div className='bg-blue-100 p-4 rounded-lg shadow'>
          <div className='flex items-center'>
            <h2 className='text-lg font-semibold'>Account Overview</h2>
            <svg className='w-6 h-6 text-blue-500 ml-auto' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'><path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M3 10h11M3 14h11m-7 4h7m-7-8h7m-5 4h5m5 4h2a2 2 0 002-2v-6a2 2 0 00-2-2h-2.586a1 1 0 01-.707-.293l-1.414-1.414A1 1 0 0014.586 6H12a2 2 0 00-2 2v2m0 4v6a2 2 0 002 2h6a2 2 0 002-2v-6a2 2 0 00-2-2h-6a2 2 0 00-2 2z' /></svg>
          </div>
          <div className='mt-2'>
            <p className='text-3xl font-bold'>1,234</p>
            <p className='text-gray-600'>Total Accounts</p>
          </div>
        </div>
        <div className='bg-green-100 p-4 rounded-lg shadow'>
          <div className='flex items-center'>
            <h2 className='text-lg font-semibold'>Transactions</h2>
            <svg className='w-6 h-6 text-green-500 ml-auto' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'><path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z' /></svg>
          </div>
          <div className='mt-2'>
            <p className='text-3xl font-bold'>567</p>
            <p className='text-gray-600'>Total Transactions</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
