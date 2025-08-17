"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import BurgerMenu from './BurgerMenu'
import { headerProps } from '../types/planetsType'

function Header({ isBgClicked, setIsBgClicked }: headerProps) {

  return (
    <div className='flex justify-between mt-[16px] mx-[24px]'>
      <h1 className='text-[#FFFFFF] text-[28px] font-[400] planetsTitle leading-[100%] tracking-[-1.05px]'>THE PLANETS</h1>
      <div className='flex justify-center items-center cursor-pointer'>
        <Image className='md:hidden'  onClick={() => setIsBgClicked(!isBgClicked)} src={!isBgClicked ? "burgerMenu.svg" : "greyBgMenu.svg"} alt="burgerMenu" width={24} height={17}/>
        <nav className='hidden md:flex'>
          <Link className='text-[#fff]' href="./">home page</Link>
          <Link className='text-[#fff]' href="./">producs</Link>
          <Link className='text-[#fff]' href="./">structure</Link>
        </nav>
      </div>
    </div>
  )
}

export default Header
