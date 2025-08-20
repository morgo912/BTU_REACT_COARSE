import React from 'react'
import Image from 'next/image'
import { additionalInfoVenus } from '../data/additionalInfo'
import { overviewProps } from '../types/planetsType'

function VenusOverview({setActiveComponent}:overviewProps) {
  return (
    <div className=' flex flex-col justify-center items-center md:mt-[60px] '>
      {/* content div */}
      <div className='flex flex-col justify-center items-center mt-[95px] md:mt-[146px] lg:flex-row lg:gap-[300px] lg:mt-[0]'>

        <Image className='mt-[74px] lg:mt-[0] md:mt-[0] md:w-[184px] md:h-[184px] lg:w-[290px] lg:h-[290px]' src="/venus.svg" alt="venusimg" width={154} height={154} />

        {/* TEXTS DIV VS CTAS DIV */}
        <div className='md:flex md:justify-center md:items-center md:mt-[50px] md:gap-[80px] lg:flex-col lg:gap-[39px]'>
          {/* texts div */}
          <div className='mt-[76px]  mx-[24px] flex flex-col justify-center items-center md:mt-[0]  md:mx-[0]  md:justify-self-start md:items-start md:w-[340px]'>
            <h1 className='text-center text-[40px] font-[400] planetTitle md:text-left md:text-[48px]  lg:text-[80px]'>VENUS</h1>
            <p className=' text-center font-[400] text-[11px]   mt-[16px] planetDescr md:text-left md:leading-[22px] md:text-[12px] md:mt-[24px] lg:text-[14px] lg:leading-[25px]'>
              Venus is the second planet from the Sun. It is named after the Roman goddess of love and beauty. As the brightest natural object in Earths night sky after the Moon, Venus can cast shadows and can be, on rare occasions, visible to the naked eye in broad daylight.
            </p>
            <div className='flex justify-center mt-[32px] gap-[4px]'>
              <p className='opacity-[0.5] text-[12px] lg:text-[14px]'>Source: <span className='opacity-[1] underline'>Wikipedia</span></p>
              <Image src="/goToIcon.svg" alt="gotoIcon" height={12} width={12} />
            </div>
          </div>

          {/* CTA */}
          <div className='hidden md:flex md:flex-col md:gap-[16px] md:justify-center md:items-center lg:items-baseline-last'>
            {/* Overview */}
            <div className="cursor-pointer md:w-[270px] md:h-[40px] border border-[#FFFFFF] md:flex md:items-center pl-[20px] gap-[17px] md:hover:bg-[#419EBB] lg:w-[350px] lg:h-[48px]" >
              <p className='text-[16px] opacity-[50%]'>01</p>
              <p className='text-[16px] ' onClick={() =>setActiveComponent("overview")}>OVERVIEW</p>
            </div>

            {/* structure */}
            <div className="cursor-pointer md:w-[270px] md:h-[40px] border border-[#FFFFFF] md:flex md:items-center pl-[20px] gap-[17px] md:hover:bg-[#419EBB] lg:w-[350px] lg:h-[48px]">
              <p className='text-[16px] opacity-[50%]'>02</p>
              <p onClick={() => setActiveComponent("structure")}>STRUCTURE</p>
            </div>

            {/*SURFACE  */}
            <div className="cursor-pointer md:w-[270px] md:h-[40px] border border-[#FFFFFF] md:flex md:items-center pl-[20px] gap-[17px] md:hover:bg-[#419EBB] lg:w-[350px] lg:h-[48px]">
              <p className='text-[16px] opacity-[50%]'>03</p>
              <p className='text-[16px]' onClick={() => setActiveComponent("surface")}>SURFACE</p>
            </div>
          </div>
        </div>

      </div>
    

      {/* additional div  */}
      <div className="mx-[24px] mt-[28px] mb-[47px]  md:flex md:justify-center md:items-center md:mt-[27px] md:gap-[13px] lg:mt-[87px] lg:gap[30px]">
        {
          additionalInfoVenus.map((item) => {
            return <div key={item.id} className='w-[327px] first:mt-[0px] rounded-[1px] border border-[#edededd2]  flex justify-between items-center mt-[8px] px-[24px] pt-[9px] pb-[13px]  md:w-[164px] md:h-[88px] md:mt-[0] md:flex-col md:justify-center md:gap-[6px] md:place-items-start lg:gap-[4px] lg:w-[255px]'>
              <p className='infoName text-[12px] font-[700] leading-[16px] tracking-[0.73px] opacity-[50%] lg:text-[11px]'>{item.infoName}</p>
              <p className='text-[20px] font-[400] tracking-[-0.75px] text-right  lg:text-[30px]'>{item.infoValue}</p>
            </div>
          })
        }
      </div>
    </div>
  )
}

export default VenusOverview
