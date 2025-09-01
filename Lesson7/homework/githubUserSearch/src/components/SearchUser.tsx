import  { useState } from 'react'
import { CiSearch } from "react-icons/ci";
import type { searchUserPropsType } from '../types/user';
import { githubUsersApi } from '../api/api';

function SearchUser({setUserData,setError,error}: searchUserPropsType) {

  const [userInput, setUserInput] = useState<string>("")
  const[loading, setLoding] = useState<boolean>(false)

  const hendleUser = async() => {
    if(!userInput){
      return  <p>There is no user</p>
    }
    if(!userInput.trim()){
      return <p>Please enter the userName</p>
    } 

    try {
      setLoding(true)
      const res = await githubUsersApi.get(`${userInput}`)
      setUserData(res.data)
      setError("")
    }catch{
      setError("User have not found")
    }finally{
      setLoding(false)
    }
    
  }

  return (
    <div className='w-full mt-9 relative'>
      <CiSearch color='#0079FF' size={20} height={20} className='absolute top-1/2 -translate-y-1/2 left-3 md:left-8 text-[13px] md:w-[24px] md:h-[24px]' />
      <input value={userInput} onChange={(e) => setUserInput(e.target.value)} className='w-full py-[18px] pl-[44px] pr-[98px] rounded-[15px] bg-[#FEFEFE] placeholder:text-[13px] inputText md:placeholder:text-[18px] md:py-[22px] md:pl-[79px] md:pr-[239px] placeholder:text-[#4B6A9B] focus:outline-none' type="text" placeholder='Search GitHub username…' />
      {error ? <p className='text-red-500 absolute top-1/2 -translate-y-1/2 right-[20%]'>No result</p> : null}
      <button onClick={hendleUser} className='absolute text-[14px] top-1/2 -translate-y-1/2 md:right-3  right-2 bg-[#0079FF] px-[18px] py-[12px] rounded-[10px] hover:bg-[#60ABFF] cursor-pointer md:px-[24px] md:text-[16px] text-[#FFFFFF]'>
        {loading ? "Searching" : "Search"}
      </button>
    </div>
  )
}

export default SearchUser
