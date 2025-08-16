"use client";
import React, { useState } from 'react'

function Counter() {
  const[count,setCount] = useState<number>(0)
  return (
    <div>
      <h1>{count}</h1>
      <button className=' cursor-pointer bg-amber-400 p-3 rounded-b-2xl' onClick={() => setCount(count-1)}>-</button> 
      <br />
      <button className='cursor-pointer bg-amber-950 p-3 rounded-b-2xl' onClick={() => setCount(count+1)}>+</button>
    </div>
  )
}

export default Counter
 