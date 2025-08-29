import React from 'react'
import { MdOutlineDarkMode } from "react-icons/md";
import { CiBrightnessUp } from "react-icons/ci";
interface darkModePropsTypes{
  darkMode:boolean;
  setDarkMode : (e: boolean) => void
}
function Header({darkMode,setDarkMode}:darkModePropsTypes) {
  return (
    <div className='flex justify-between '>
      <h1>devfinder</h1>
      <div 
        onClick={() => setDarkMode(!darkMode)}
        className='flex  items-center gap-4'>
        <p>{darkMode? "Dark": "Light"}</p>
        {darkMode? <MdOutlineDarkMode /> :  <CiBrightnessUp /> }
        
      </div>
    </div>
  )
}

export default Header
