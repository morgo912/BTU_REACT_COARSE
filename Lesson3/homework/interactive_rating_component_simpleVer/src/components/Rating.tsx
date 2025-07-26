import React, { useState } from 'react'
import StarDiv from '../subComponents/StarDiv'
import { btnText, description, finalDescription, finalTitle, title } from '../data/texts'
import paymentMaching from "../images/pamentMachine.svg"
const ratingNumbers = [1,2,3,4,5]
function Rating() {
  const[isClicked, setIsClicked] = useState(false)
  const[selectedRatingNumber , setSelectedRatingNumber] = useState(0)
  return (
    !isClicked ? (
      //parent div
      <div className='bg-[#181E27] w-[327px] h-[380px] md:w-[412px] md:h-[416px] rounded-[30px] flex flex-col justify-center px-[24px] '>
        <StarDiv />
        <h1 className='text-[#FFFFFF] text-[24px] font-[700] md:text-[28px] mt-[16px] tracking-[0.5px]'>{title}</h1>
        <p className='mt-[17px]  md:mt-[15px] text-[14px] text-[#969FAD] tracking-[1px] leading-[22px] md:text-[15px] md:leading-[24px] w-[279px] md:w-[340px]'>{description}</p>
        <div className='mt-[24px] flex gap-[17px] md:gap-[21px]'>
          {
            ratingNumbers.map((number,index) => {
              return <div onClick={() => setSelectedRatingNumber(number)} className='bg-[#262E38] rounded-[50%] w-[42px] h-[42px] md:w-[51px] md:h-[51px] flex justify-center items-center hover:bg-[#7C8798] duration-500 active:bg-[#FC7614] cursor-pointer' key={index}>{number}</div>
          })
          }
        </div>

        <button onClick={() => setIsClicked(true)} className='w-[279px] h-[45px] md:w-[341px] md:h-[45px] bg-[#FC7614] rounded-[30px] mt-[24px]  py-[12px] text-[#FFFFFF] hover:bg-[#fff] hover:text-[#FC7614] cursor-pointer duration-500'>{btnText}</button>
      </div>
    ):(
      <div className='bg-[#181E27] w-[327px] h-[380px] md:w-[412px] md:h-[416px] rounded-[30px] flex flex-col justify-center items-center'>
        <img className='w-[144px] h-[96px] md:w-[162px] md:h-[108px] md:mt-[45px] md:mx-[124px] mt-[34px] mx-[92px]' src={paymentMaching} alt="" />
        <button className='mt-[24px] md:mt-[32px] bg-[#262E38] text-[#FC7614]  rounded-[30px] px-[12px] py-[8px] md:px-[20px] md:py-[8px] text-[14px] md:text-[15px] text-center felx justify-center items-center'>You have selected {selectedRatingNumber} out of 5</button>
        <p className='mt-[24px] md:mt-[32px] text-[24px] text-[#FFFFFF] text-center md:text-[28px] font-bold'>{finalTitle}</p>
        <p className='mt-[10px] text-[#969FAD] text-[14px] leading-[22px] px-[24px] text-center mb-[37px] md:mt-[15px] md:text-[15px] md:leading-[24px] md:mb-[45px]'>{finalDescription}</p>
      </div>
    )

  )
}

export default Rating
