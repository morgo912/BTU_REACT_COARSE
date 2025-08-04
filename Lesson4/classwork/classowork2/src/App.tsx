import "../src/index.css"
import { useEffect } from "react"
import { useState } from "react"

function App() {
  const[count, setCount] = useState(0)
  const[name,setName] = useState("elene")
  useEffect(() => {
    console.log("hello from useEffect")
    document.title = `${count}`
    const times= setTimeout(() => {
      console.log("3 sec passed")
    })

    return () => clearTimeout(times)
  },[count])
 return(

  <div>
    <button className="bg-amber-950 w-[20px] h-[20px] p-[20px] flex justify-center items-center text-white cursor-pointer" onClick={() => setCount(count + 1)}>+</button>
    <h1>{count}</h1>
    <hr />
    <h1>{name}</h1>
    <button className="bg-amber-950 w-[20px] h-[20px] p-[20px] flex justify-center items-center text-white cursor-pointer" onClick={() => setCount(count - 1)}>-</button>
    <button onClick={() => setName("lazare")} className="bg-amber-400 flex justify-center items-center text-white cursor-pointer">Change name</button>
  </div>
 )
}

export default App
