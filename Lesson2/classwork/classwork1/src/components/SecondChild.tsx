import React from 'react'
import type { secondChildProps } from '../types/UserInfo'

function SecondChild({name,lastName,isStundent,isHardworker}: secondChildProps) {
  return (
    <div>
      <ol className='flex flex-col mr-[4000px]'>
        <li className='text-[40px] items-center'>Person Name: {name}</li>
        <li>Person LastName: {lastName}</li>
        <li>IsStudent: {isStundent}</li>
        <li>IsHardworker: {isHardworker} </li>
      </ol>
    </div>
  )
}

export default SecondChild
