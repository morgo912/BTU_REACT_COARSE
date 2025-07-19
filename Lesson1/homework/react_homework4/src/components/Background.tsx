import React from 'react'
import leftOval from "../images/leftOval.svg"
import rightOval from "../images/rigthOval.svg"

function Background() {
  return (
    <div>
      <img className='z-1 absolute top-0 left-[-32rem]  h-[978px]' src={leftOval} alt="" />
      <img className='absolute bottom-[0%] right-[0%]' src={rightOval} alt="" />
    </div>
  )
}

export default Background
