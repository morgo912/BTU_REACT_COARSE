import React from 'react'
import Author from "../assets/images/profileImg.svg"
import { author, profileText } from '../data/text'

function Profile() {
  return (
    <div className='flex flex-col gap-[16px] w-[302px]'>
      <hr className='w-[100%] text-[#2E405A]' />
      {/* profile div */}
      <div className='flex items-center gap-[16px]'> 
        <img src={Author} alt="" />
        <p className='text-[#8BACD9] text-[16px]'>{profileText} <span className='text-[#FFFFFF] font-[400] cursor-pointer hover:text-[#00FFF8]'>{author}</span> </p>
      </div>
    </div>
  )
}

export default Profile
