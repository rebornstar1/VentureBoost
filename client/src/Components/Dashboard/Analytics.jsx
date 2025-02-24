import React from 'react'
import Charts from './Charts'

function Analytics() {
  return (
    <div className='flex flex-col pb-2'>
        <div className='font-semibold text-xl md:text-2xl p-4'>Statistics</div>
        <div className='flex flex-row flex-wrap gap-3 p-2'>
           <Charts title={"Unit Economics"} dataone={100} datatwo={200} datathree={300}/>
           <Charts title={"Equity Split"} dataone={100} datatwo={200} datathree={300}/>
           <Charts title={"Previous 3 Years Sales"} dataone={100} datatwo={200} datathree={300}/>
        </div>
    </div>
  )
}

export default Analytics
