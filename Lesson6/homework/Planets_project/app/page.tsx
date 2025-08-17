"use client"
import { useState } from "react";
import Header from "./components/Header";
import BurgerMenu from "./components/BurgerMenu";

export default function Home() {
  const[isBgClicked,setIsBgClicked] = useState(false)
  return (
    <div className="w-full min-h-screen flex flex-col  bg-[#070724]">
      <Header isBgClicked={isBgClicked} setIsBgClicked={setIsBgClicked} />
      <hr className="bg-[#FFFFFF] h-[1px] border-0 mt-[16px]" />
      {isBgClicked && <BurgerMenu />}
      
    </div>

  );
}
