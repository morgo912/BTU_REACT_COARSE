import React from 'react'
import Power from "../assets/images/power-icon.svg"
import Clock from "../assets/images/clock-icon.svg"
import { powerText, time } from '../data/text'

function AdditionalInfo() {
  return (
    <div className='flex justify-between w-[301px]'>
      {/* left part  */}
      <div className='flex items-center gap-[6.48px]'> 
        <img src={Power} />
        <p className='text-[16px] text-[#00FFF8]'>{powerText}</p>
      </div>
      {/* right part */}
      <div className='flex items-center gap-[7.7px] '>
        <img src={Clock} alt="clock" />
        <p className='text-[#8BACD9] text-[16px]'>{time}</p>
      </div>
    </div>
  )
}

export default AdditionalInfo
