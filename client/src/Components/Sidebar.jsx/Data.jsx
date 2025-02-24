import React from 'react'

function Data(props) {
  return (
    <div className='m-3 sm:-1 md:p-3 bg-[#FFFFFF] opacity-50 hover:opacity-100 hover:font-semibold font-montserrat sm:flex-justify-center'>
       <div className='flex flex-row gap-4 flex-wrap'>
          <div>
             <img src={props.image} className='w-[28px] h-[28px]'></img>
          </div>
          <div className='hidden sm:inline'>
             {props.titles}
          </div>
       </div>
    </div>
  )
}

export default Data;
