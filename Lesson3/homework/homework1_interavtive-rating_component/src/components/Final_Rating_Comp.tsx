import React from 'react'
import type { finalCompProps } from '../type/RatingTypes'
import FinalImg from "../images/final-Img.svg"
function Final_Rating_Comp({ratingNumber}: finalCompProps) {
  return (
    <div className='w-[327px] h-[360px] md:w-[412px] md:h-[416px] rounded-[30px] flex flex-col justify-center items-center bg-[#232A34]'>
      <img className='mt-[34px] mx-[92px]' src={FinalImg} alt="" />
      <button className='mt-[24px] text-[14px] w-[168px] h-[32px] rounded-[50%] bg-[#262E38] text-[#FC7614] px-[12px] py-[5px]'>You selected {ratingNumber} out of 5</button>
      <p className='mx-[24px] mt-[24px] text-[24px] font-[700] text-[#FFFFFF]'>Thank you</p>
      <p className='leading-[22px] tracking-[1px] mt-[10px] mx-[24px] mb-[37px] text-[14px] font-[400] text-[#969FAD] text-center'>
        We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!
      </p>
    </div>
  )
}

export default Final_Rating_Comp
