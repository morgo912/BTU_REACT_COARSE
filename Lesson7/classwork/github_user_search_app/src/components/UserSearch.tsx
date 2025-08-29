import React, { useState } from 'react'
import { CiSearch } from "react-icons/ci";
import type { githubUser } from '../type/user';
import { githubUserApi } from '../api/api';

interface userSearchProps {
  hendleSearch:(user: githubUser |null , error: string|null) => void;
}

function UserSearch({hendleSearch}: userSearchProps) {
  const[userName , setUserName] = useState<string>("")
  const[loading,setLoading] = useState<boolean>(false)
  
  const featchUser  = async() => {
    if(!userName.trim()) return // trim() - removes the whitespaces - 
    
    try {
      setLoading(true)
      const res = await githubUserApi.get(`${userName}`)
      hendleSearch(res.data, null)
    } catch{
      hendleSearch(null , "user has not found")
    }finally{
      setLoading(false)
    }
  }


  return (
    <div className='relative mt-[36px] w-full'>
      <CiSearch  className='size-[24px] absolute top-1/2 -translate-y-1/2 left-3' /> 
      <input value={userName} onChange={(e) => setUserName(e.target.value)} className='py-[22px] pl-12 pr-[24px] bg-[#FEFEFE] w-full rounded-[15px] ' type="text" placeholder='Search gitub user'/>
      <button 
        disabled={loading} 
        onClick={featchUser} 
        className='cursor-pointer rounded-[10px] absolute right-3 bg-[#0079FF] top-1/2 -translate-y-1/2 px-4 py-2'>
          
          {loading ? "Searching..." : "Search"}
      </button>

    </div>
  )
}

export default UserSearch
