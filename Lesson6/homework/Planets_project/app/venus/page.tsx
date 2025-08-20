"use client"
import React, { useState } from 'react'
import Header from '../components/Header'
import BurgerMenu from '../components/BurgerMenu'
import VenusOverview from '../components/VenusOverview'
import VenusStructure from '../components/VenusStructure'
import VenusSurface from '../components/VenusSurface'
function Venus() {
  const[isBgClicked,setIsBgClicked] = useState(false)
  const[activeComponent,setActiveComponent] = useState("overview")
  return (
    <div className="w-full min-h-screen flex flex-col  bg-[#070724]">
      <Header isBgClicked={isBgClicked} setIsBgClicked={setIsBgClicked} />
      <hr className="bg-[#FFFFFF] h-[1px] border-0 mt-[16px]" />
      {isBgClicked && <BurgerMenu />}
      {/* btn divs */}
      <div className="flex justify-between items-center px-[24px] py-[20px] md:hidden">
        {/* Overview */}
        <div className="cursor-pointer">
          <p  onClick={() =>setActiveComponent("overview")}>OVERVIEW</p>
        </div>

        {/* structure */}
        <div className="cursor-pointer">
          <p onClick={() => setActiveComponent("structure")}>STRUCTURE</p>
        </div>
        {/*  */}
        <div className="cursor-pointer">
          <p onClick={() => setActiveComponent("surface")}>SURFACE</p>
        </div>
      </div>
      <hr />

      {activeComponent === "overview" && <VenusOverview setActiveComponent={setActiveComponent}  />}
      {activeComponent === "structure" && <VenusStructure setActiveComponent={setActiveComponent} />}
      {activeComponent === "surface" && <VenusSurface setActiveComponent={setActiveComponent} />}
    </div>
  )
}

export default Venus
