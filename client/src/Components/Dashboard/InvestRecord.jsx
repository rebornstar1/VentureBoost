import React from 'react'
import { useState } from 'react';

function InvestRecord(props) {
  return (
    <div className='grid grid-cols-2 md:grid-cols-4 justify-between mx-10 my-5 text-center'>
                 <div className='text-2xl font-semibold'>
                    {props.Investor}
                    <div className='text-sm font-light'>Cargo and Shipping</div>
                  </div>
                  <div className='text-xl font-light flex gap-3 mx-auto'>           
                      <div>{props.Valuation}</div>
                      <div className='text-sm font-extrabold hidden md:inline py-1'>USD</div>
                  </div>
                 <div className='text-2xl font-light hidden md:inline'>{props.Equity}</div>
                 {
                    props.Relative > 0 ? 
                    <div className='text-2xl font-semibold text-[#FF0000]'>{props.Relative}%</div>
                    :
                    props.Relative === 0 ?
                    <div className='text-2xl font-semibold text-[#d7d746]'>{props.Relative}%</div>
                    :
                    <div className='text-2xl font-semibold text-[#48cd3c]'>{props.Relative}%</div>
                 }
    </div>
  )
}

export default InvestRecord;

// 1 for the profit 
// 0 for NULL
// -1 for the Loss
