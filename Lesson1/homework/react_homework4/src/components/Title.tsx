import React from 'react'
import { title, titleSpan } from '../data/texts'

function Title() {
  return (
    <p className='text-[18px] font-[700] text-center mt-[72px]'>{title} <span className='text-[18px] font-[400] ml-[8.5px] text-[#6B7082]'>{titleSpan}</span> </p>
  )
}

export default Title
