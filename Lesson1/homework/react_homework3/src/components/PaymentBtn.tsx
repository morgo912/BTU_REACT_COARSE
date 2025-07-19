import React from 'react'
import { blueBtnText } from '../data/tetxt'


function PaymentBtn() {
  return (
    <div className='bg-[#382AE1] pt-[15px] pb-[15px] pl-[102px] pr-[102px] rounded-[11px] w-[354px] mt-[32px] hover:bg-[#766CF1] cursor-pointer'>
      <p className='text-[#FFFFFF] text-[15px] font-[900]'>{blueBtnText}</p>
    </div>
  )
}

export default PaymentBtn
