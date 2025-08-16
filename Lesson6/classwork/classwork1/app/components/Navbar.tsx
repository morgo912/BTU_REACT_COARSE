import Link from 'next/link'
import React from 'react'

function Navbar() {
  return (
    <nav className='mt-[20px] min-w-[200px] flex justify-center items-center'>
      <ul className='flex justify-center items-center gap-4'>
        <Link href={"/"} className='cursor-pointer'>Home</Link>
        <Link href={"/products"}>Products</Link>
        <Link href={"/about"}>About</Link>  {/* folder names in href */}
      </ul>
    </nav>
  )
}

export default Navbar
