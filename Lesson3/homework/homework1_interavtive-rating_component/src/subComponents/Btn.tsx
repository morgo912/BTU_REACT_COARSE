import React from 'react'
import type { BtnProps } from '../type/RatingTypes'
import { useState } from 'react'


function Btn({background,btnText,btnHoveredBackgorund,btnClickedFunction}:BtnProps) {
  const[hoveredBackground,setHoveredBackground] = useState(false)
  return (
    <button onClick={btnClickedFunction} onMouseMove={()=> setHoveredBackground(true)} onMouseLeave={() => setHoveredBackground(false)} className=' mt-[24px] flex justify-center items-center text-[#FFFFFF] rounded-[32px] px-[108px] py-[12px] text-[16px] cursor-pointer hover:bg-black btn' 
    style={{ backgroundColor: hoveredBackground ? btnHoveredBackgorund : background}}>
      {btnText}
    </button>
      
  )
}

export default Btn
