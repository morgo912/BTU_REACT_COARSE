import React from 'react'
import type { githubUser } from '../type/user'

interface userInfoProps {
  user:githubUser | null ,
  error:string|null,
  darkMode:boolean;
}

function UserInfo({user, error, darkMode}:userInfoProps) {
  if(error){
    return <p className='text-red-500'>{error}</p>
  }
  if(!user) {
    return null
  }

  return (
    <div className="mt-6 bg-white shadow-md rounded-lg p-6">
      <div className="flex flex-col items-center text-center">
      {/* Avatar */}
      <img
        className="w-[117px] h-[117px] rounded-full border-2 border-gray-200 shadow"
        src={user.avatar_url}
        alt={user.login}
      />

      {/* Name + Bio */}
      <div className="mt-4">
        <h2 className="text-xl font-bold text-gray-900">{user.login}</h2>
        <p className={`text-gray-600 mt-2 ${
          darkMode ? "text-text-gray-600" :  "text-white"
        }`}>
          {user.bio || "User does not have a bio"}
        </p>
      </div>

      
      <div className="flex justify-around w-full mt-6 bg-gray-50 rounded-lg p-4">
        <p className={`text-sm text-gray-500 ${
          !darkMode ? "text-text-gray-600" :  "text-white"
        }`}>
          Following: <span className="font-semibold text-gray-900">{user.following}</span>
        </p>
        <p className="text-sm text-gray-500">
          Followers: <span className="font-semibold text-gray-900">{user.followers}</span>
        </p>
        <p className="text-sm text-gray-500">
          Repos: <span className="font-semibold text-gray-900">{user.public_repos}</span>
        </p>
        <p className="text-sm text-gray-500">
          Location: <span className="font-semibold text-gray-900">{user.location || "Unknown"}</span>
        </p>
      </div>
    </div>
  </div>
  )
}

export default UserInfo
