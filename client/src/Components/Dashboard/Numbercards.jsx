import React from 'react'

function Numbercards(props) {
  return (
    <div className='bg-[#FFFFFF] rounded-xl px-4 md:w-[256px] sm:w-[196px]'> 
        <div className='flex flex-row flex-wrap'>
            <div className='py-3'>
                <div className='text-lg opacity-80'>{props.title}</div>
                <div className='text-xl font-semibold'>$ {props.amount}</div>
            </div>
            <div>{props.link}</div>
        </div>
    </div>
  )
}

export default Numbercards
