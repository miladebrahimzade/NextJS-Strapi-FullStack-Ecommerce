'use client'

import { useState } from 'react'
import { MdOutlineShoppingCart } from 'react-icons/md'
// import { MdShoppingCart } from "react-icons/md";

export default function HeaderNav() {
  const [show, setShow] = useState(false)

  const handleClick = () => {
    setShow(!show)
  }

  return (
    <div>
      {/* hamburger icon */}
      <div className='w-6 h-5 relative space-y-1.5 z-30' onClick={handleClick}>
        <div
          className={`w-6 h-0.5 bg-black rounded-full transition origin-top-right ${
            show && '-rotate-45'
          }`}
        ></div>

        <div
          className={`w-6 h-0.5 bg-black rounded-full transition ${
            show && 'opacity-0'
          }`}
        ></div>

        <div
          className={`w-6 h-0.5 bg-black rounded-full origin-bottom-right transition ${
            show && 'rotate-45'
          }`}
        ></div>
      </div>

      {/* mobile menu */}
      <div
        className={` w-48 h-64 p-4 absolute top-16 bg-white rounded-lg shadow-md transition-all duration-700 ease-in-out z-20 ${
          show ? 'left-4' : '-left-72'
        }`}
      >
        <div className='space-y-2'>
          <div className='flex items-center gap-4 text-xl'>
            <MdOutlineShoppingCart />
            <div>سبد خرید</div>
          </div>
        </div>
      </div>
    </div>
  )
}
