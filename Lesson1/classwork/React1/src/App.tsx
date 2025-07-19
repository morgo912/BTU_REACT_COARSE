import React from 'react'
import Headers from './components/Headers'
import Image from './components/Image'
import Paragraph from './components/Paragraph'

const App = () =>  {
  return(
    <div className="w-[320px] flex flex-col justify-center items-center bg-white p-4 rounded-[15px] gap-[9px]">
      <Image />
      <Headers />
      <Paragraph />
    </div>
  )
}


export default App
