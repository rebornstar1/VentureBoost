import React from 'react'

function Testimonials(props) {
  // Here we will form the format for Testimonials
  return (
    <div className='bg-[#FFFFFF] mx-5 py-4 my-4 rounded-lg px-5'>
      <div className='font-semibold text-xl py-4'>"{props.Title}"</div>
      <div className='text-gray-600 line-clamp-6'>{props.Description}</div>
      <div>... Read More</div>
      <div className='pt-4 font-medium'>{props.yname}</div>
      <div>{props.oname}</div>
    </div>
  )
}

export default Testimonials;
