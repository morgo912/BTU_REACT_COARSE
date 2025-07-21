import React from 'react'
import type { childCompProps } from '../types/UserInfo'

//In TSX, we must define types before using variables like props
//defined in UserInfo.ts ->
function ChildComp({name , age}: childCompProps) {
  return (
    <div>
      <h1>Hello, I am  {name}. I am {age} years old </h1>
    </div>
  )
}

export default ChildComp
