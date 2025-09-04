"use client"
import DisplayCardInfo from "./components/DisplayCardInfo";
import CardInfo from "./components/CardInfo";
import { useState } from "react";
import Compleated from "./components/Compleated";

export default function Home() {
  const[userName, setUserName] = useState("")
  const[cardNumber, setCardNumber] = useState<string>("")
  const[expirationMonth , setExpirationMonth] = useState<string>("")
  const[expirationYear, setExpirationYear] = useState<string>("")
  const[cvc,setCvc] = useState<string>("")

  const[compleated ,setCompleated] = useState<boolean>(false)
 
  if(compleated){
    return <Compleated 
      setUserName={setUserName} 
      setCardNumber={setCardNumber} 
      setExpirationMonth={setExpirationMonth} 
      setExpirationYear={setExpirationYear} 
      setCvc={setCvc} 
      setCompleated={setCompleated}
    />;
  }

  return (
    <div className="w-full bg-[#FFFFFF] flex justify-center items-center">
      {/* content divs */}
      <div className="w-full  flex flex-col lg:flex-row lg:gap-[350px] lg:items-center">
        <DisplayCardInfo
          userName = {userName}
          cardNumber = {cardNumber}
          expirationMonth = {expirationMonth}
          expirationYear = {expirationYear}
          cvc = {cvc}
        />
        <CardInfo  
          setUserName={setUserName}
          setCardNumber={setCardNumber}
          setExpirationMonth={setExpirationMonth}
          setExpirationYear = { setExpirationYear}
          setCvc = {setCvc}
        /> 
      </div>  
    </div>
  );
}
