import React from 'react'
import SingleUpdate from './SingleUpdate'

function Updates() {
  return (
    <div>
       <div className='font-semibold text-lg md:text-xl p-4'>Recent Updates</div>
       <div>
          <SingleUpdate/>
          <SingleUpdate/>
       </div>
    </div>
  )
}

export default Updates
