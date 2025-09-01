import { useState } from "react"
import "../src/index.css"
import Header from "./components/Header"
import SearchUser from "./components/SearchUser"
import type { userDataTypes } from "./types/user"
import UserInfo from "./components/UserInfo"
function App() {
  const[userData , setUserData] = useState<userDataTypes | null>(null)
  const[error, setError] = useState<string>("")

  const[darkMode , setDarkMode] = useState<boolean>(false)

  console.log(userData)
  console.log(error)
  console.log(darkMode)
  return(
    <div className={` w-full min-h-screen flex justify-center items-center
      ${!darkMode ? "bg-[#F6F8FF]" : "bg-[#141D2F]"}
    `}>
      {/* contents divs */}
      <div className="max-w-[327px] w-full flex flex-col items-center justify-center">
        <Header darkMode={darkMode} setDarkMode = {setDarkMode}  />
        <SearchUser  setUserData={setUserData}  setError={setError}/>
        <UserInfo error={error} userData={userData} darkMode={darkMode} />
      </div>
    </div>
  )
}

export default App
