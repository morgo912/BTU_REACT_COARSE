import leftImg from "../images/leftImg.svg"
import rectangle from "../images/rectangle.svg"
import { Questions } from "./QuestionsData"
import downIcon from "../images/downIcon.svg"
import { useState } from "react"
function FAQ() {
  const[showAnswer, setShowAnswer] = useState<null | number >(null)
  return(
    <div className="relative w-[920px] h-[510px] bg-[#FFFFFF] rounded-[23px] flex justify-center items-center gap-[88px]">
      {/* img div */}
      <div >
        <img src={leftImg} alt="" />
        <img className="absolute top-[40%] right-[90%]" src={rectangle} alt="" />
      </div>
      {/* text div */}
      <div className="flex flex-col gap-[43px]">
        <h1 className="text-[#1E1F36] text-[32px] font-[700] leading-[100%]">FAQ</h1>
        <div className="mr-[95px] ">
          {
            Questions.map((item) => {
              return <div key={item.id} className="flex flex-col">
                <div className="flex justify-between items-center w-[350px]">
                  <p className="text-[14px] font-[400] text-[#4B4C5F]">{item.question}</p>
                  <img className="cursor-pointer" src={downIcon} onClick={() => setShowAnswer((prev) => prev == item.id ? null : item.id)} alt="" />
                </div>
                {showAnswer == item.id && <p className="text-[#4B4C5F] text-[12px] mt-[11px]">{item.answer}</p>}
                <hr className="mt-[16px] mb-[8px] bg-[#E8E8EA] h-[0.5px]" />
              </div>
            })
            
          }
        </div>
        
      </div>
    </div>
  )
}

export default FAQ