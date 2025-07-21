import React from 'react'
import Rectangle from "../assets/images/rect-img.svg"
import HoveredBackImg from "../assets/images/hoverBackImg.svg"
import Eye from "../assets/images/Eye.svg"
function Image() {
  return (
    <div className='group w-[302px] h-[302px] m-[24px] imgDiv cursor-pointer'>
      <img className='absolute' src={Rectangle} />
      <img className='relative z-[1] object-none hidden  group-hover:block' src={HoveredBackImg}  />
      <img className='relative  z-[2] left-[50%] bottom-[50%] translate-x-[-50%] translate-y-[-50%] hidden  group-hover:block'  src={Eye}  />
    </div>
  )
}

export default Image
