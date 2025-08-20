"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import BurgerMenu from './BurgerMenu'
import { headerProps } from '../types/planetsType'

function Header({ isBgClicked, setIsBgClicked }: headerProps) {

  return (
    <div className='flex justify-between mt-[16px] mx-[24px] md:flex-col md:justify-center md:items-center md:mt-[32px] lg:flex lg:flex-row lg:justify-between lg:items-center'>
      <h1 className='text-[#FFFFFF] text-[28px] font-[400] planetsTitle leading-[100%] tracking-[-1.05px]'>THE PLANETS</h1>
      <div className='flex justify-center items-center cursor-pointer md:mt-[39px] md:mx-[51px] lg:mt-[0]'>
        <Image className='md:hidden'  onClick={() => setIsBgClicked(!isBgClicked)} src={!isBgClicked ? "burgerMenu.svg" : "greyBgMenu.svg"} alt="burgerMenu" width={24} height={17}/>
        <nav className='hidden md:flex md:items-center md:justify-center md:gap-[42px] md:leading-[25px]'>
          <Link className='text-[#fff] leading-[25px] tracking-[1px] text-[15px] lg:text-[17px]' href="./mercury">MERCURY</Link>
          <Link className='text-[#fff] leading-[25px] tracking-[1px] text-[15px] lg:text-[17px]' href="./venus">VENUS</Link>
          <Link className='text-[#fff] leading-[25px] tracking-[1px] text-[15px] lg:text-[17px]' href="./earth">EARTH</Link>
          <Link className='text-[#fff] leading-[25px] tracking-[1px] text-[15px] lg:text-[17px]' href="./">MARS</Link>
          <Link className='text-[#fff] leading-[25px] tracking-[1px] text-[15px] lg:text-[17px]' href="./">JUPITER</Link>
          <Link className='text-[#fff] leading-[25px] tracking-[1px] text-[15px] lg:text-[17px]' href="./">SATURN</Link>
          <Link className='text-[#fff] leading-[25px] tracking-[1px] text-[15px] lg:text-[17px]' href="./">URANUS</Link>
          <Link className='text-[#fff] leading-[25px] tracking-[1px] text-[15px] lg:text-[17px]' href="./">NEPTUN</Link>
        </nav>
      </div>
    </div>
  )
}

export default Header
