import React from 'react'
import Charts from './Charts'
import { Doughnut } from 'react-chartjs-2'
import Numbercards from './Numbercards'

function Revenue() {

  const uniteco = {
    labels: ['Fixed Costs', 'Web Managment', 'Miscallaneous Expenses'],
      datasets: [
        {
          label: 'Equity % ',
          data: [58, 20, 22],
          backgroundColor: [
            '#FFE605',
            '#FF05C8',
            '#00FFF5',
          ],
          borderColor: [
            '#FFF000',
            '#FFF5C8',
            '#0FFFF5',
          ],
          borderWidth: 1
        }
      ]
  }

  return (
    <div className='flex flex-col pb-4'>
        <div className='font-semibold text-xl md:text-2xl p-4'>Revenue and Sales Projection</div>
        <div className='flex flex-row flex-wrap'>
            <div className='flex flex-row flex-wrap p-2 px-6 gap-4 mx-auto my-auto'>
                  <div className=' rounded-lg'>
                    <div className='w-[128px] h-[128px] md:w-[192px] md:h-[192px]'>
                      <Doughnut data={uniteco} className='mx-auto'/>
                    </div>
                  </div>
            </div>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 gap-8 mx-auto py-5'>
                <Numbercards title={"Expected"} amount={"100000"} link={""}/>
                <Numbercards title={"Remainaing"} amount={"100000"} link={""}/>
                <Numbercards title={"Collected"} amount={"100000"} link={""}/>
                <Numbercards title={"Overdue"} amount={"100000"} link={""}/>
            </div>
        </div>
    </div>
  )
}

export default Revenue
