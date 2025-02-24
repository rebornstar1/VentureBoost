import React from 'react'
import Analytics from './Analytics'
import Revenue from './Revenue'
import Orders from './Orders'

function Ianalytics() {
  return (
      <div className='flex flex-col lg:w-7/12 w-9/12 gap-4 mx-auto'>
            <div className='bg-[#F0F0F0] rounded-lg shadow-md'>
            <Analytics/>
            </div>
            <div className='bg-[#F0F0F0] rounded-lg shadow-md'>
            <Revenue/>
            </div>
            <div className='bg-[#F0F0F0] rounded-lg shadow-md'>
            <Orders/>
            </div>
        </div>
  )
}

export default Ianalytics
