import React from 'react'
import type {iconProps} from '../types/FoodComp'

function Icon({img , background}:iconProps) {
  return (
    <div className="flex justify-center items-center p-[5px] w-[24px] h-[24px] rounded-[16px]" style={{ backgroundColor: background }}>
      <img src={img} alt="" />
    </div>
  )
}

export default Icon
