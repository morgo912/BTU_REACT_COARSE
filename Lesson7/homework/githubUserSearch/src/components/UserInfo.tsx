import type { userInfoPropsTypes } from '../types/user'
import { IoLocation } from "react-icons/io5";
import { FaTwitter } from "react-icons/fa";
import { FaLink } from "react-icons/fa6";
import { HiMiniBuildingOffice2 } from "react-icons/hi2";


function UserInfo({userData,darkMode,error} : userInfoPropsTypes) {

  if(error) return null
  if (!userData) return null

  const socialInfo = [
    {label: "Repos" , value: userData.public_repos , width:"79",id:1 },
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
    <div className={`w-full  px-[24px] mt-[48px] pt-[32px] pb-[48px] rounded-[15px] lg:px-[48px] lg:pt-[44px] ${!darkMode? "bg-[#FEFEFE]" : "bg-[#1E2A47]"} lg:flex lg:justify-between`}>
           
      {/*This div shows only on large screens*/}
      <div className='hidden lg:block'>
        <img className='w-[120px] h-[120px] rounded-[50%]' src={userData.avatar_url} alt="avatar of the user" />
      </div>

      {/* right content */}
      <div className='lg:w-[480px] '>
        <div className='flex justify-between w-full max-w-[360px] lg:max-w-[480px]'>
          <img className='w-[90px] h-[90px] rounded-[50%] md:w-[117px] md:h-[117px] lg:hidden' src={userData.avatar_url} alt="avatar of the user" />
          <div className='flex flex-col justify-center  lg:flex-row lg:justify-between lg:w-full'>
            <div className="flex flex-col">
              {userData.name === null ? <p  className={`text-[16px] text-[#2B3442] md:text-[26px] ${!darkMode? "text-[#2B3442]" : "text-[#FFFFFF]"} lg:text-nowrap`}>Not Available</p> : <p className={`text-[16px] text-[#2B3442] md:text-[26px] ${!darkMode? "text-[#2B3442]" : "text-[#FFFFFF]"} lg:text-nowrap`}>{userData.name}</p> }
              {userData.company === null ? <p  className='text-[13px] text-[#0079FF] md:text-[16px]'>Not Available</p> : <p className='text-[13px] text-[#0079FF] md:text-[16px] lg:text-nowrap '>{userData.company}</p> }
            </div>
            {userData.created_at === null ? <p  className='text-[13px] text-[#0079FF] md:text-[15px] lg:text-nowrap'>Not Available</p> :  <p className='text-[13px] text-[#697C9A] mt-[6px] md:text-[15px] lg:text-nowrap '>{userData.created_at}</p> }
          </div>
        </div>

        <div className='mt-[33px]'>
          <p className={`${!darkMode ? "text-[#4B6A9B]" : "text-[#ffff]"}`}>{userData.bio}</p>
        </div>


        {/* followers,following,Repo amount, info div */}
        <div className={`flex rounded-[10px] px-[16px] py-[18px] mt-[24px] ${!darkMode ? "bg-[#F6F8FF]" : "bg-[#141D2F]"}`}> 
          <div className='flex md:w-[221px] md:ml-[32px] md:mr-[96px] mb:mt-[15px] md:mb-[10px] md:gap-[54px]'>
            {socialInfo.map((item) => {
              return <div key={item.id} className={`flex flex-col justify-center items-center gap-[24px]  w-[${item.width}px] md:items-baseline md:gap-[1px]` }>
                <p className={` text-[11px] ${!darkMode ? "text-[#4B6A9B]" : "text-[#ffff]"} md:text-[13px]`}>{item.label}</p>
                <p className={` text-[16px] ${!darkMode ? "text-[#2B3442]" : "text-[#ffff]"} md:text-[22px] font-bold`}>{item.value}</p>
            </div>
            })}
          </div>
        </div>

        {/* location, githublink, twitter user ,github bio */} 
        <div className='flex flex-col gap-[16px] mt-[24px] md:grid md:grid-cols-2 md:gap-[16px]'>
          {
            additionalInfo.map((item) => {
              return <div key={item.id} className='flex items-start gap-[13px]'>
                <div className='md:w-[15px]'>{item.icon}</div>
                {item.content === null ? <p   className={` text-[13px] ${!darkMode ? "text-[#4B6A9B]" : "text-[#ffff]"} md:text-[15px]`}>Not Available</p> : <a className={` text-[13px] ${!darkMode ? "text-[#4B6A9B]" : "text-[#ffff]"} `} href={item.contentUrl}>{item.content}</a>}
              </div>
            })
          }
        </div>
      </div>
    </div>
  )
}

export default UserInfo
