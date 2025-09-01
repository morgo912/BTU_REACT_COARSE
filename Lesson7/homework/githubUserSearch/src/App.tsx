import { useEffect, useState } from "react"
import "../src/index.css"
import Header from "./components/Header"
import SearchUser from "./components/SearchUser"
import type { userDataTypes } from "./types/user"
import UserInfo from "./components/UserInfo"
import { githubUsersApi } from "./api/api"
function App() {
  const[userData , setUserData] = useState<userDataTypes | null>(null)
  const[error, setError] = useState<string>("")

  const[darkMode , setDarkMode] = useState<boolean>(false)

  
  useEffect(() => {
    const hendleDefaultUser = async() => {
      try {
        const res = await githubUsersApi.get<userDataTypes>("elenemorgoshia")
        setUserData(res.data)
        setError("")
      }catch(error:unknown) {
        if(error instanceof Error){
          console.log(error.message)
          setError(error.message)
        }
      }
    }

    hendleDefaultUser()
  },[])
  return(
    <div className={` w-full min-h-screen flex justify-center items-center
      ${!darkMode ? "bg-[#F6F8FF]" : "bg-[#141D2F]"}
    `}>
      
      <div className="max-w-[327px] w-full flex flex-col items-center justify-center md:max-w-[573px] lg:max-w-[730px]">
        <Header  darkMode={darkMode} setDarkMode = {setDarkMode}  />
        <SearchUser error={error}  setUserData={setUserData}  setError={setError}/>
        <UserInfo error={error}  userData={userData} darkMode={darkMode} />
      </div>
    </div>
  )
}

export default App
