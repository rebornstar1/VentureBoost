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
        <div className='font-semibold text-xl md:text-2xl p-4'>Orders</div>
        <div className='flex flex-row flex-wrap'>
            <div className='grid sm:grid-cols-1 md:grid-cols-3 gap-8 mx-auto py-5'>
                <Numbercards title={"Total Orders"} amount={"100000"} link={""}/>
                <Numbercards title={"Completed"} amount={"100000"} link={""}/>
                <Numbercards title={"Remaining"} amount={"100000"} link={""}/>
            </div>
        </div>
    </div>
  )
}

export default Revenue