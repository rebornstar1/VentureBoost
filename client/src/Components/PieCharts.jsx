import React from 'react'
import { PieChart } from 'react-minimal-pie-chart';

function PieCharts() {

<PieChart
  data={[
    { title: 'One', value: 10, color: '#E38627' },
    { title: 'Two', value: 15, color: '#C13C37' },
    { title: 'Three', value: 20, color: '#6A2135' },
  ]}
/>;



  return (
    <div>
      Here I'm Gonna Display the Pie Charts Respectively
    </div>
  )
}

export default PieCharts
