import React from 'react'
import InvestRecord from './InvestRecord';
import InvestmentForm from './InvestmentForm'

function Ainvest() {
  return (
    <div className='flex flex-col lg:w-7/12 w-9/12 gap-4 mx-auto'>
        <div className=' bg-[#F0F0F0] rounded-lg shadow-md'>
             <div className='text-3xl m-5'>Make an Investment Offer</div>
              <InvestmentForm/>
        </div>
    </div>
  )
}

export default Ainvest;