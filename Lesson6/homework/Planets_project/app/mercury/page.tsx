"use client"
import React, { useState } from 'react'
import Header from '../components/Header'
import BurgerMenu from '../components/BurgerMenu'
import Image from 'next/image'

function Mercury() {
  const[isBgClicked,setIsBgClicked] = useState(false)
  return (
    <div  className="w-full min-h-screen flex flex-col  bg-[#070724]">
      <Header isBgClicked={isBgClicked} setIsBgClicked={setIsBgClicked} />
      <hr className="bg-[#FFFFFF] h-[1px] border-0 mt-[16px]" />
      {isBgClicked && <BurgerMenu />}
      {/* btn divs */}
      <div className="flex justify-between items-center px-[24px] py-[20px]">
        {/* Overview */}
        <div className="cursor-pointer">
          <p className="">OVERVIEW</p>
        </div>

        {/* structure */}
        <div className="cursor-pointer">
          <p>STRUCTURE</p>
        </div>
        {/*  */}
        <div className="cursor-pointer">
          <p>SURFACE</p>
        </div>
      </div>
      <hr />

      {/* content Div */}
      <div  className='flex flex-col justify-center items-center mt-[95px] mx-[132px] '>
        <Image src="/mercury.svg" alt="mercury" height={111} width={111}/>
      
        {/* texts div */}
        <div className='mt-[98px] flex flex-col justify-center items-center'>
          <h1 className='text-center text-[40px] font-[400] planetTitle'>MERCURY</h1>
          <p className='w-[327px] text-center font-[400] text-[13px] leading-[22px]  mt-[16px] planetDescr'>
            Mercury is the smallest planet in the Solar System and the closest to the Sun. Its orbit around the Sun takes 87.97 Earth days, the shortest of all the Suns planets. Mercury is one of four terrestrial planets in the Solar System, and is a rocky body like Earth.
          </p>
          <div className='flex justify-center mt-[32px] gap-[4px]'>
            <p className='opacity-[0.5] text-[12px]'>Source: <span className='opacity-[1] underline'>Wikipedia</span></p>
            <Image src="/goToIcon.svg" alt="gotoIcon" height={12} width={12} />
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Mercury
