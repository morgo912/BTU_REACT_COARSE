import React from 'react'
import { MdDone } from "react-icons/md";
import { comleatedTypes } from '../types/card';


function Compleated({setUserName,setCardNumber,setExpirationMonth, setExpirationYear, setCvc,setCompleated}:comleatedTypes) {

  const onContinue = () => {
    setUserName("")
    setCardNumber("")
    setExpirationMonth("")
    setExpirationYear("")
    setCvc("")

    setCompleated(false)
  }

  return (
    <div className='mt-[123px] flex flex-col justify-center items-center gap-[35px] mb-[82px] lg:ml-[127px]'>
      {/* cicle div */}
      <div className='w-[80px] h-[80px] rounded-[50%]  compleatedDiv flex justify-center items-center'>
        <MdDone color='#FFFFFF' size={30} className='w-[24px] h-[24px] '/>
      </div>

      {/* content div */}
      <div className='flex flex-col justify-center items-center'>
        <h1 className='text-[28px] text-[#21092F] font-[500] tracking-[3.24px]'>THANK YOU!</h1>
        <p className='text-[#8F8694] text-[18px] mt-[16px] text-center'>We’ve added your card details</p>
        <button onClick={onContinue} className='cursor-pointer w-[327px] h-[53px] rounded-[8px] bg-[#21092F] px-[124px] py-[15px] mt-[48px] text-[#FFFFFF] text-[18px] font-[500]'>Continue</button>
      </div>
    </div>
  )
}

export default Compleated
