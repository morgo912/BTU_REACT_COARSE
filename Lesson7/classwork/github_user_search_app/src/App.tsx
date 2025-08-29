import '../src/index.css'
import Header from './components/Header'
import UserSearch from './components/UserSearch'
import UserInfo from './components/UserInfo'
import { useEffect, useState } from 'react'
import type { githubUser } from './type/user'
import { githubUserApi } from './api/api'

function App() {
  const[userData ,setUserData] = useState<githubUser|null>(null) //  created state in order to store datas from api
  const[error, setError] = useState<string|null>(null)
  
  const[darkMode , setDarkMode] = useState<boolean>(false)

  const hendleSearch = (user: githubUser| null , error: string |null) => {
    setUserData(user)
    setError(error)
  }

  useEffect(() => {
    const fetchDefaultUser = async() => {
      try {
        const res = await githubUserApi("elenemorgoshia")
        setUserData(res.data)
        setError(null)
      } catch{
        setError("default useer have not found")
      }
    }

    fetchDefaultUser()
  },[]) 
    
  return(
    <div className={`w-full min-h-screen flex items-center justify-center bg-[#F6F8FF]  ${
      darkMode ? "bg-black" : "bg-[#F6F8FF]"
    }`}>
      <div className='max-w-[730px] w-full '>
        <Header darkMode = {darkMode} setDarkMode={setDarkMode} />
        <UserSearch hendleSearch = {hendleSearch} />
        <UserInfo darkMode ={ darkMode }  user={userData} error = {error} />
      </div>
    </div>
  )
}

export default App
