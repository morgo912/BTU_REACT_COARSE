import { useState } from "react"
import "../src/index.css"
import type { AdviceSlip } from "./type"
import { adviceApi } from "./api"

function App() {
  const[advice, setAdvice] = useState<AdviceSlip>()
  const[loading,setLoading] = useState(false)

    const fetchAdivce = async () => {
      try{
        const res = await adviceApi.get("advice")
        setAdvice(res.data)
        console.log(res.data)
      }catch(error:unknown){
        if(error instanceof Error){
          console.log(error.message || "Somethign went wrong")
        }
      }finally{
        setLoading(false)
      }
    }

   
  return (
    <div>
      {loading && <div>Loading...</div>}
      <h1>{advice?.slip.advice}</h1>
      <button className="rounded-2xl p-3 bg-amber-800 cursor-pointer" onClick={fetchAdivce}>Give me Advice</button>
    </div>
  )
}

export default App
