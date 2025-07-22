import React from 'react'
import type { foodCardProps } from '../types/FoodComp'
import { btnText } from '../data/text'
import LogoIcon from  "../images/i-icon.png"
import Icon from './Icon'
import "../App.css"

function FoodCard({img,title,description,calorieAmount,calorieDetails,deg,newPrice,oldPrice,iconImgSrc,iconBackground}: foodCardProps) {
  return (
    <div className=' flex flex-col justify-center items-center bg-[#FFFFFF] rounded-[16px] w-[360px] h-[528px]'>
      {/* img div */}
      <div className='relative w-[360px] h-[216px] '>
        <img  src={img} alt="" />
        <div className='absolute right-[24px] top-[16px] flex justify-center items-center p-[7px] bg-[#FFFFFF] w-[32px] h-[32px] rounded-[16px]'>
          <img src={LogoIcon} alt="" />
        </div>
      </div>
      {/* title vs  icons */}
      <div className='flex  items-center justify-center gap-[57px]  mt-[32px] ml-[24px] mr-[24px]'>
        <p className='w-[198px] text-[24px] '>{title}</p>
        <div className='flex justify-center items-center gap-[10px]'>
          <Icon img={iconImgSrc} background={iconBackground}/>
          <Icon img={iconImgSrc} background={iconBackground}/>
        </div>
      </div>
    
      <p className='m-[24px] text-[#6E798C] font-[400] font-["Open Sans] descrText'>{description}</p>

      {/* div for calories , date and for cel */}
      <div className='flex justify-center items-center gap-[43px] mr-[24px] ml-[24px]'>
        <p className='text-[16px] leading-[25px] w-[56px] font-[600] font-["Open Sans"] text-[#A5ADBB] calories'>{calorieAmount} Cal</p>
        <p className='text-[16px] font-[600]   text-[#A5ADBB] calorieDetails'>{calorieDetails}</p>
        <p className='text-[16px] font-[600]   text-[#A5ADBB] deg'>{deg}°C</p>
      </div>

      {/* price vs btn div */}
      <div className='flex justify-center items-center gap-[29px] mt-[33px] mb-[30px]'>
        {/* price div */}
        <div className='flex items-baseline gap-[8px]'>
          <p className='text-[#081F32] text-[28px] font-[400]'>${newPrice}</p>
          <p className='text-[#F8593B] text-[20px] line-through '>${oldPrice}</p>
        </div>
        <button className='p-[9px] bg-[#2ECC71] w-[144px] h-[44px] text-[#ffff] tracking-[0.18rem] rounded-[4px] cursor-pointer'>{btnText}</button>
      </div>
    </div>
  )
}

export default FoodCard
