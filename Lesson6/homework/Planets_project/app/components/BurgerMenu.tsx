import React from 'react'
import { PlanetsArray } from '../data/planets'
import Image from 'next/image'
import Link from 'next/link'
function BurgerMenu() {
  return (
    <div className='flex flex-col justify-center mx-[24px] mt-[44px]'>
      {
        PlanetsArray.map((item) => {
          return <div  key={item.id}>
            <div className='flex justify-between items-center my-[20px]'>
              <div className='flex justify-center items-center gap-[15px] '>
                <Image src={item.circleImg} width={20} height={20} alt="circle"/>
                <Link href={item.routeLink}><p className='text-[#FFFFFF]'>{item.planetName}</p></Link>
              </div>
            
              <Image src="/rightIcon.svg" width={4} height={8} alt="rightIcon" className='w-auto '/>
            </div>
            
            <hr className='bg-[#FFFFFF] h-[1px] border-0' />
          </div>
        })
      }
    </div>
  )
}

export default BurgerMenu
