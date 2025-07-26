import React from 'react'
import type { ratingsProps } from '../type/RatingTypes'

const numbersArray = [1,2,3,4,5]
function Ratings({selectedNumberFunction} : ratingsProps) {

  return (
    //parent div
    <div className='flex gap-[17px] mt-[24px]'>
      {
        numbersArray.map((number, index) => {
          return <div onClick={() => selectedNumberFunction(number)} className='rounded-[50%] w-[42px] h-[42px] bg-[#262E38] flex justify-center items-center md:w-[51px] md:h-[51px] ' key={index}>
            <p className='cursor-pointer text-[14px] font-[700] text-[#7C8798] '>{number}</p>
          </div>
        })
      }
    </div>
  )
}

export default Ratings
