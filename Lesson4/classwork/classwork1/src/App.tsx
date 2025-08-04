import { faqItems } from "../src/data/faqData"
import { FaAngleUp } from "react-icons/fa";
import "../src/index.css"
import { useState } from "react";
function App() {
  const [showAnswer, setShowAnswer] = useState<null | number >(null) // it could be numeber as well
  
  console.log(showAnswer)
  return (
    <div className="bg-amber-200 w-full min-h-screen justify-center items-center ">
      {
        faqItems.map((item) => {
          return <div key={item.id}>
            <div className="flex items-center">
              <h1>{item.question}</h1>
              <div onClick={() => setShowAnswer((prev) => (prev == item.id ? null : item.id) )}><FaAngleUp /></div> 
            </div>
            {/* if showAnswr is true , than item.answer will be set in p / or nothing would happen */}
            {showAnswer == item.id  && <p>{item.answer}</p>}
            <p>{item.id}</p>
            <hr />
            
          </div>
        })
      }
    </div>
  )
}

export default App
