import React from 'react'
import StarIcon from '../images/StarIcon.svg'
function StarDiv() {
  return (
    <div className='w-[40px] h-[40px]  flex justify-center items-center p-[13px] bg-[#262E38]  md:w-[48px] md:h-[48px] rounded-[50%]'>
      <img src={StarIcon} alt="" />
    </div>
  )
}

export default StarDiv
