import React, { useEffect, useState } from 'react'
import Data from '../Components/Sidebar.jsx/Data'
import AnaImg from '../Components/Sidebar.jsx/svgpics/Anaimg.png'
import PartImg from '../Components/Sidebar.jsx/svgpics/Partners.png'
import FedImg from '../Components/Sidebar.jsx/svgpics/Feedback.png'
import INvImg from '../Components/Sidebar.jsx/svgpics/Investors.png'
import SimImg from '../Components/Sidebar.jsx/svgpics/Simstart.png'
import Analytics from '../Components/Dashboard/Analytics'
import Updates from '../Components/Dashboard/Updates'
import Revenue from '../Components/Dashboard/Revenue'
import Orders from '../Components/Dashboard/Orders'
import Ianalytics from '../Components/Dashboard/Ianalytics'
import Ifeedback from '../Components/Dashboard/Ifeedback'
import Iinvest from '../Components/Dashboard/Iinvest.jsx'
import Ainvest from '../Components/Dashboard/Ainvest.jsx'

function Dashboard() {


  const [val,setval] = useState(1);
  console.log(val);

  return (
    <div className='bg-[#FDF5E6] font-montserrat'>
    <div className='flex flex-wrap gap-4 p-2 md:p-4'>
        <div className='bg-[#FFFFFF] w-1/6 rounded-lg shadow-md'>
          <div onClick={() => setval(1)}>
             <Data image={AnaImg} titles={"Analytics"} flag = { val == 1 ? 1 : 0}/>
          </div>
          <div onClick={() => setval(2)}>
             <Data image={PartImg} titles={"Funding Rounds"} flag = { val == 2 ? 1 : 0}/>
          </div>
          <div onClick={() => setval(3)}>
             <Data image={FedImg} titles={"Testimonials"} flag = { val == 3 ? 1 : 0}/>
          </div>
          <div onClick={() => setval(4)}>
             <Data image={INvImg} titles={"Invest"} flag = { val == 4 ? 1 : 0}/>
          </div>
          <div onClick={() => setval(5)}>
             <Data image={SimImg} titles={"Similar Startups"} flag = { val == 5 ? 1 : 0}/>
          </div>
        </div>
        {val === 1 ? <Ianalytics/> : val === 3 ? <Ifeedback/> : val === 4 ? <Ainvest/> : <Iinvest/>}
        <div className='bg-[#F0F0F0] hidden lg:inline w-1/5 rounded-lg shadow-md'>
         <Updates/>
        </div>
    </div>  
    </div>
  )
}

export default Dashboard
