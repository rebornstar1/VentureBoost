import React from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Chart} from 'chart.js'
import { Doughnut } from 'react-chartjs-2'

function Charts(props) {

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
    <div className='bg-[#FFFFFF] rounded-lg p-10 sm:px-2 md:px-8 pt-4 mx-auto'>
        <div className='font-semibold flex flex-wrap w-[128px] md:w-[192px]'>{props.title}</div>
        <div className='md:w-[192px] md:h-[192px] w-[128px] h-[128px] pt-6'>
          <Doughnut data={uniteco} className='mx-auto'/>
        </div>
    </div>
  )
}

export default Charts
