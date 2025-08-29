import React from 'react'
import type { userInfoPropsTypes } from '../types/user'
import { IoLocation } from "react-icons/io5";
import { FaTwitter } from "react-icons/fa";
import { FaLink } from "react-icons/fa6";
import { HiMiniBuildingOffice2 } from "react-icons/hi2";


function UserInfo({userData,darkMode} : userInfoPropsTypes) {
  if (!userData) return null; 
  return (
    <div className={`w-full  px-[24px] mt-[48px] pt-[32px] pb-[48px] rounded-[15px]  ${!darkMode? "bg-[#FEFEFE]" : "bg-[#1E2A47]"}`}>
      {/* img div */}
      <div className='flex justify-between w-full'>
        <img className='w-[70px] h-[70px] rounded-[50%]' src={userData.avatar_url} alt="avatar of the user" />
        <div className='flex flex-col'>
          <p className={`text-[16px] text-[#2B3442] ${!darkMode? "text-[#2B3442]" : "text-[#FFFFFF]"} `}>{userData.name}</p>
          <p className='text-[13px] text-[#0079FF]'>{userData.company}</p>
          <p className='text-[13px] text-[#697C9A] mt-[6px]'>{userData.created_at}</p>
        </div>
      </div>

      {/* bio div */}
      <div className='mt-[33px]'>
        <p>{userData.bio}</p>
      </div>

      {/* followers,following, amount of repo  info div - i will use map here as well (later :))*/}
      <div className={`flex rounded-[10px] px-[16px] py-[18px] mt-[24px] ${!darkMode ? "bg-[#F6F8FF]" : "bg-[#141D2F]"} `}> 
        {/* Repos */} 
        <div className='flex flex-col justify-center items-center gap-[24px] w-[79px]'>
          <p className={` text-[11px] ${!darkMode ? "text-[#4B6A9B]" : "text-[#ffff]"} `}>Repos</p>
          <p  className={` text-[16px] ${!darkMode ? "text-[#4B6A9B]" : "text-[#ffff]"} `}>{userData.public_repos}</p>
        </div>
        {/* following */}
        <div className='flex flex-col justify-center items-center gap-[24px] w-[81px]'>
          <p className={` text-[11px] ${!darkMode ? "text-[#4B6A9B]" : "text-[#ffff]"} `}>Followings</p>
          <p  className={` text-[16px] ${!darkMode ? "text-[#4B6A9B]" : "text-[#ffff]"} `}>{userData.following}</p>
        </div>
        
        {/* followers */}
        <div className='flex flex-col justify-center items-center gap-[24px] w-[89px]'>
          <p className={` text-[11px] ${!darkMode ? "text-[#4B6A9B]" : "text-[#ffff]"} `}>Followers</p>
          <p  className={` text-[16px] ${!darkMode ? "text-[#4B6A9B]" : "text-[#ffff]"} `}>{userData.followers}</p>
        </div>
      </div>

      {/* location, githublink,twitter and github bio - i will use map here later  */} 
      <div className='flex flex-col gap-[16px] mt-[24px]'>
        {/* location div */}
        <div className='flex items-center gap-[13px]'>
          <IoLocation color='#4B6A9B' size={18} />
          <p className={` text-[13px] ${!darkMode ? "text-[#4B6A9B]" : "text-[#ffff]"} `}>{userData.location}</p>
        </div>

        {/* bio link div */}
        <div className='flex items-center gap-[13px]'> 
          <FaLink color='#4B6A9B' /> 
          <p className={` text-[13px] ${!darkMode ? "text-[#4B6A9B]" : "text-[#ffff]"} `}>{userData.bio}</p>
        </div>

        {/* twitter */}
        <div className='flex items-center gap-[13px]'>
          <FaTwitter color='#4B6A9B' size={18} />
          <p className={` text-[13px] ${!darkMode ? "text-[#4B6A9B]" : "text-[#ffff]"} `}>{userData.twitter_username}</p>
        </div>

        {/* github link */}
        <div className='flex items-center gap-[13px]'>
          <HiMiniBuildingOffice2 color='#4B6A9B' size={18}  />
          <p className={` text-[9px] ${!darkMode ? "text-[#4B6A9B]" : "text-[#ffff]"} `}>{userData.url} </p>
          
        </div>
      </div>

    </div>
  )
}

export default UserInfo
// iconებზე ფერები როგორ შევცვალო დარქ მოუდის დროს
//რა ერორებიც მაქვს appში ეგ რატომ მაქვს და  როგორ გამოვასწრორო