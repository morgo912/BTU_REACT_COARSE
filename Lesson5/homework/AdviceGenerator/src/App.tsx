import { useEffect, useState } from "react"
import "../src/index.css"
import { adviceApi } from "./api/adviceApi"
import type { AdviceTypes } from "./types/advice"
import saveIcon from "../src/images/saveIcon.svg"

function App() {
  const[advice,setAdvice] = useState<AdviceTypes>()
  const[loading, setLoading] = useState(true)
  
  useEffect(() => {
    const fetchAdvice = async () => {
      try{
        const res = await adviceApi.get("advice")
        setAdvice(res.data)
        setLoading(false)
      }catch(error : unknown){
        if(error instanceof Error){
          console.log(error.message || "Something went wrong")
        }
      }finally{
        setLoading(false)
      }
    } 
    
    fetchAdvice()
  })
  return(
    <div className="bg-[#1F2531] w-full min-h-screen flex  justify-center items-center">
      <div className="w-[297px] h-[388px] md:w-[720px] md:h-[442px] rounded-[40px] bg-[#0A0325] flex flex-col justify-center items-center relative">
        {/* content div */}
        <div className="flex flex-col justify-center items-center gap-[55px] mt-[40px] mx-[18px] mb-[66px]">
          <h1 className="text-[#6BF4B8] italic text-[20px] leading-2.5 md:text-[24px]">ADVICE <span className="font-[100]">#{advice?.slip.id}</span></h1>
          {loading && <p className="text-[#fff] text-center text-[18px] md:text-[30px]">Loading</p>}
          <p className="font-bold text-[#fff] text-center text-[18px] md:text-[30px] w-[260px] md:w-[546px]">{advice?.slip.advice}</p>
        
         {/* hr div */}
          <div className="w-[full] flex flex-row items-center">
            {/* left crice */}
            <div className="rounded-[50%] w-[6px] h-[6px] bg-[#FAF4F4]"></div>

            {/* horizontal row */}
            <div className="w-[225px] md:w-[546px] h-[1px] bg-[#FAF4F4]"></div>

            {/* right circle */}
            <div className="rounded-[50%] w-[6px] h-[6px] bg-[#FAF4F4]"></div>
          </div>
        
        </div>

        {/* icon div */}
        <div className="w-[74px] h-[74px] bg-[#6BF4B8] rounded-[50%] flex justify-center items-center absolute top-[100%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 ">
          <img src={saveIcon} alt="" />
        </div>
      </div>
    </div>
  )
}

export default App
