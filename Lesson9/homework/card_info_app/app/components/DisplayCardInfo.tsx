import React from 'react'
import { formTypes } from '../types/card'

function DisplayCardInfo({userName,cardNumber,expirationMonth ,expirationYear ,cvc} : formTypes) {

  const cardNumberDisplay = cardNumber || "0000000000000000"
  const cardNumbersArray: string[] = [];
  for (let i = 0; i < cardNumberDisplay.length; i += 4) {
    cardNumbersArray.push(cardNumberDisplay.slice(i, i + 4));
  }
  console.log(cardNumberDisplay)

  return (
    <div className='relative w-full max-w-[375px]  flex flex-col justify-center items-center bg-gradient-to-b from-[#7D2C85] via-[#361339] to-[#361339] h-[240px] lg:min-h-screen lg:max-w-[483px]'> 
      <div className='absolute top-[15%] lg:top-[187px] lg:left-[50%]'>
        {/* back of the card div*/}
        <div className='bg-gradient-to-b from-[#FFFFFF] to-[#D2D3D9]  mb-[51px] w-[286px] h-[157px] flex flex-col rounded-[6px] ml-[73px] mr-[16px] lg:w-[447px] lg:h-[245px] lg:mt-[282px]'> 
          {/* black bg */}
          <div className='mt-[14.74px] bg-[#2F2F2F] h-[34.6px] lg:mt-[23px] lg:h-[54px]'>
            {/* black background  */}
          </div>

          <div className='mt-[15.38px] w-[230.98px] h-[29.74px] bg-[#ADB5BE] ml-[28.79px] mr-[26.23px] rounded-[4px] flex justify-end items-center lg:mt-[24px] lg:w-[361px] lg:h-[38px] lg:ml-[45px] lg:mr-[41px]'>
            <p className='text-[9px] mr-[10.79px] text-[#FFFFFF] lg:text-[14px]'>{cvc || "0 0 0"}</p>
          </div>
        </div>

        {/* front of the car div */}
        <div className='absolute w-[286px] h-[157px] frontDiv rounded-[6px] px-[19px] lg:px-[32px] top-[52.5%] right-[20%] lg:top-[0] lg:w-[447px] lg:h-[245px]'>
            
          {/*circles  */}
          <div className='flex items-center gap-[10.23px] mt-[17.6px] lg:gap-[15.91px] lg:mt-[28px]'>
            {/* big circle */}
            <div className='w-[30.19px] h-[30px] bg-[#FFFFFF] rounded-[50%] lg:w-[46.96px] lg:h-[47px]'></div>
            {/* small sricle */}
            <div className='w-[13.58px] h-[13.5px] rounded-[50%] border-[1.2px] border-[#FFFFFF] lg:w-[21.13px] lg:h-[21.15px]'></div>
          </div>

          {/* CardNumber - PAY ATTENTION TO THE SPACES BETWEN THE NUMEBRS! */}
          <div className='mt-[37px]  mr-[27px] flex gap-[5px] items-center lg:gap-[15px] lg:mt-[64px]'>
            {cardNumbersArray.map((item, index) => (
              <span className='text-[18px] text-[#ffffff] flex items-center gap-[1px] lg:text-[28px] lg:tracking-[3.42px]' key={index}>{item}</span>
            ))}
            
          </div>

          {/* NAME AD CVC */}
          <div className='flex justify-between mt-[17px] mb-[20.6px] lg:mt-[25.5px] lg:mb-[26.5px]'>
            <p className='text-[9px] text-[#FFFFFF] lg:text-[14px]'>{userName || "JANE APPLESEED"}</p>
            <div className='flex items-center '>
              <p className='text-[9px] text-[#FFFFFF] lg:text-[14px]'>{expirationMonth || "00"}</p>
              <p className='text-[9px] text-[#FFFFFF] lg:text-[14px]'>/{expirationYear || "00"}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DisplayCardInfo
