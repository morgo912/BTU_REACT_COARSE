import { MdDarkMode } from "react-icons/md";
import type { headerPropsTypes } from '../types/user';
import { PiSunDuotone } from "react-icons/pi";
function Header({darkMode,setDarkMode}:headerPropsTypes) {
  return (
    <div className='flex justify-between w-full'>
      <h1 className={`text-[26px] font-[700] ${!darkMode ? "text-[#222731]" : "text-[#FFFFFF]" }`}>devfinder</h1>
      <div className='flex items-center justify-center  gap-[16px] cursor-pointer'>
        {!darkMode? <p onClick={() => setDarkMode(!darkMode)} className='text-[13px] text-[#4B6A9B]'>DARK</p> : <p onClick={() => setDarkMode(!darkMode)} className='text-[13px] text-[#4B6A9B]'>LIGHT</p>}
        {!darkMode ? <MdDarkMode onClick={() => setDarkMode(!darkMode)} color='#4B6A9B' className='w-[20px] h-[20px]' />  : <PiSunDuotone color='#ffff' size={20} />}
      </div>
    </div>
  )
}

export default Header
