import React from 'react'
import type { userInfoPropsTypes } from '../types/user'
import { IoLocation } from "react-icons/io5";
import { FaTwitter } from "react-icons/fa";
import { FaLink } from "react-icons/fa6";
import { HiMiniBuildingOffice2 } from "react-icons/hi2";


function UserInfo({userData,darkMode,error} : userInfoPropsTypes) {
  if(error){
    return <p className='text-red-500'>Sorry, user have not found</p>
  }

  if (!userData) return null

  const socialInfo = [
    {label: "Repos" , value: userData.public_repos , width:"79",id:1},
    {label:"Followings" , value:userData.following , width:"81" , id:2},
    {label:"Followers" , value: userData.followers, width:"89", id:3}
  ]

  const additionalInfo = [
    {icon: <IoLocation color='#4B6A9B' size={18}/> , content: userData.location , id:1,contentUrl:""},
    {icon: <FaLink color='#4B6A9B'size={18}/> , content: userData.bio, id:2, contentUrl:""},
    {icon: <FaTwitter color='#4B6A9B' size={18}/>,content:userData.twitter_username , id:3, contentUrl:""},
    {icon: <HiMiniBuildingOffice2 color='#4B6A9B' size={18}/>, content:"@github", id:4, contentUrl:userData.url}
  ]
  

  return (
    <div className={`w-full  px-[24px] mt-[48px] pt-[32px] pb-[48px] rounded-[15px]   ${!darkMode? "bg-[#FEFEFE]" : "bg-[#1E2A47]"}`}>
           
      {/*div that will be opened only on the large screen  */}
      <div className='hidden lg:block'>
        <img className='w-[90px] h-[90px] rounded-[50%]' src={userData.avatar_url} alt="avatar of the user" />
      </div>
      {/* img div */}
      <div className='flex justify-between w-full'>
        <img className='w-[90px] h-[90px] rounded-[50%]' src={userData.avatar_url} alt="avatar of the user" />
        <div className='flex flex-col'>
          {userData.name === null ? <p  className={`text-[16px] text-[#2B3442] ${!darkMode? "text-[#2B3442]" : "text-[#FFFFFF]"} `}>Not Available</p> : <p className={`text-[16px] text-[#2B3442] ${!darkMode? "text-[#2B3442]" : "text-[#FFFFFF]"} `}>{userData.name}</p> }
          {userData.company === null ? <p  className='text-[13px] text-[#0079FF]'>Not Available</p> : <p className='text-[13px] text-[#0079FF]'>{userData.company}</p> }
          {userData.created_at === null ? <p  className='text-[13px] text-[#0079FF]'>Not Available</p> :  <p className='text-[13px] text-[#697C9A] mt-[6px]'>{userData.created_at}</p> }
        </div>
      </div>

      {/* bio div */}
      <div className='mt-[33px]'>
        <p className={`{!darkMode ? "text-[#FFFFFF]" : "text-[#4B6A9B]"}`}>{userData.bio}</p>
      </div>

      {/* followers,following, amount of repo  info div */}
      <div className={`flex rounded-[10px] px-[16px] py-[18px] mt-[24px] ${!darkMode ? "bg-[#F6F8FF]" : "bg-[#141D2F]"} `}> 
        {socialInfo.map((item) => {
          return <div key={item.id} className={`flex flex-col justify-center items-center gap-[24px] w-[${item.width}px]`}>
            <p className={` text-[11px] ${!darkMode ? "text-[#4B6A9B]" : "text-[#ffff]"} `}>{item.label}</p>
            <p className={` text-[16px] ${!darkMode ? "text-[#4B6A9B]" : "text-[#ffff]"} `}>{item.value}</p>
          </div>
        })}
      </div>

      {/* location, githublink,twitter and github bio */} 
      <div className='flex flex-col gap-[16px] mt-[24px]'>
        {
          additionalInfo.map((item) => {
            return <div key={item.id} className='flex items-center gap-[13px]'>
              <div>{item.icon}</div>
              {item.content === null ? <p   className={` text-[13px] ${!darkMode ? "text-[#4B6A9B]" : "text-[#ffff]"} `}>Not Available</p> : <a className={` text-[13px] ${!darkMode ? "text-[#4B6A9B]" : "text-[#ffff]"} `} href={item.contentUrl}>{item.content}</a>}
            </div>
          })
        }
      </div>

    </div>
  )
}

export default UserInfo
