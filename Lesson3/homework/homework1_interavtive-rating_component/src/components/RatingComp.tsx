import React, { useState } from 'react'
import Star from '../subComponents/Star'
import { description, orangeBtnText, title } from '../data/text'
import Ratings from '../subComponents/Ratings'
import Btn from '../subComponents/Btn'
import Final_Rating_Comp from './Final_Rating_Comp'

function RatingComp() {
  const[isRatingClicked , setIsRatingClicked] = useState(false)
  const[selectedRatingNumber, setSelectedRatingNumber] = useState(0)

  if(isRatingClicked){
    return <Final_Rating_Comp  ratingNumber={selectedRatingNumber}/>
  }
  return (
    // parent div
    <div className='bg-[#232A34] rounded-[30px] w-[327px] h-[360px] md:w-[412px] md:h-[416px] flex flex-col justify-center px-[24px] '>
      <Star />
      <h1 className='text-[#FFFFFF] text-[28px] font-bold tracking-wider mt-[16px] md:text-[28px]'>{title}</h1>
      <p className='text-[14px] text-[#969FAD] font-[400] leading-[22px] mt-[17px] md:text-[15px] md:leading-[24px]'>{description}</p>
      <Ratings selectedNumberFunction={setSelectedRatingNumber}/>
      <Btn background = "#FC7614" btnText={orangeBtnText} btnClickedFunction={() => setIsRatingClicked(true)} btnHoveredBackgorund='#000' />
    </div>
  )
}

export default RatingComp
