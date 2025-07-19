import React from 'react'
import { followerNumber, followersText, likesNumber, LikesText, photosNumber, PhotosText } from '../data/texts'

function AdditionalInfoComp() {
  return (
    <div className='mt-[28px] w-[350px]'>
      <hr className='border-[#E8E9EC]' />
      {/* parent */}
      <div className='flex justify-center items-center mt-[24px] mb-[24px]'>
        {/* child1 */}
        <div className='flex flex-col justify-center items-center '>
          <p className='text-[#2E3349] text-[18px] font-[700]'>{followerNumber}</p>
          <p className='text-[#6B7082] text-[10px] font-[400]'>{followersText}</p>
        </div>
        
        {/* second Child */}
        <div className='flex flex-col justify-center items-center ml-[46px] mr-[54px]'>
          <p className='text-[#2E3349] text-[18px] font-[700]'>{likesNumber}</p>
          <p className='text-[#6B7082] text-[10px] font-[400]'>{LikesText}</p>
        </div>

        {/* third Child */}
        <div className='flex flex-col justify-center items-center'>
          <p className='text-[#2E3349] text-[18px] font-[700]'>{photosNumber}</p>
          <p className='text-[#6B7082] text-[10px] font-[400]'>{PhotosText}</p>
        </div>
      </div>
    </div>
  )
}

export default AdditionalInfoComp
