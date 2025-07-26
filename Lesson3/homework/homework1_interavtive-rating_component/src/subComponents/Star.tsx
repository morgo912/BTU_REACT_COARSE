import React from 'react'
import StarIcon from "../images/StarIcon.svg"

function Star() {
  return (
    <div className='flex justify-center items-center p-[13px] bg-[#262E38] w-[40px] h-[40px] rounded-[50%] md:w-[48px] md:h-[48px]'>
      <img src={StarIcon} alt="starIcon" />
    </div>
  )
}

export default Star
