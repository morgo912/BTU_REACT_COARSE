import React from 'react'
import musicIcon from "../images/musicIcon.svg"

function Plan() {
  return (
    <div className="flex justify-between items-center bg-[#F7F9FF] pt-[25px] pb-[25px] pl-[24px] pr-[24px] rounded-[11px] w-[354px] mt-[20px]">
      {/* left content*/}
      <div className='flex gap-[20px] items-center'>
        <img src={musicIcon} alt="music Icon" />
        <div className='fle flex-col gap-[6px]'>
          <p className='text-[16px] font-[900] text-[#1F2E55]'>Annual Plan</p>
          <p className='text-[16px] text-[#717FA6] font-[400]'>$59.99/year</p>
        </div>
      </div>

      {/* right content */}
      <p className='text-[14px] font-[700] underline text-[#382AE1] hover:text-[#766CF1]  cursor:pointer changeP'>Change</p>
    </div>
  )
}

export default Plan
