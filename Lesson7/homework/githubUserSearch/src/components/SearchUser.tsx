import React, { useState } from 'react'
import { CiSearch } from "react-icons/ci";
import type { searchUserPropsType } from '../types/user';
import { githubUsersApi } from '../api/api';

function SearchUser({setUserData,setError}: searchUserPropsType) {

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
    } catch{
      setError("User have not found")
    }finally{
      setLoding(false)
    }
    
  }

  return (
    <div className='w-full mt-9 relative'>
      <CiSearch color='#0079FF' size={20} height={20} className='absolute top-1/2 -translate-y-1/2 left-3 text-[13px]' />
      <input value={userInput} onChange={(e) => setUserInput(e.target.value)} className='py-[18px] pl-[44px] pr-[98px] rounded-[15px] bg-[#FEFEFE] placeholder:text-[13px] inputText' type="text" placeholder='Search GitHub username…' />
      <button onClick={hendleUser} className='absolute text-[14px] top-1/2 -translate-y-1/2 right-0 bg-[#0079FF] px-[18px] py-[12px] rounded-[10px] hover:bg-[#60ABFF] cursor-pointer'>
        {loading ? "Searchin" : "Search"}
      </button>
    </div>
  )
}

export default SearchUser
