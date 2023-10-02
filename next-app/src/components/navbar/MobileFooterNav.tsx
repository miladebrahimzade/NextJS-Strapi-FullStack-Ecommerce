'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { GoHome, GoHomeFill } from 'react-icons/go'
import {
  MdOutlineCategory,
  MdCategory,
  MdOutlineShoppingCart,
  MdShoppingCart,
} from 'react-icons/md'
import { FaUser, FaRegUser } from 'react-icons/fa6'

export default function MobileFooterNav() {
  // responsive display
  const [isLarge, setIsLarge] = useState(false)
  const screenLg = 1024

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > screenLg) setIsLarge(true)
      else setIsLarge(false)
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // active state
  const correctPath = usePathname()

  return (
    <>
      {/* {!isLarge && ( */}
      <nav className='fixed bottom-0 bg-snow-white  max-w-screen-lg w-full border-t-2 border-light-brown'>
        <ul className='flex justify-between  items-center px-6 py-2'>
          <li>
            <Link
              href='/'
              className='flex flex-col items-center text-dark-brown'
            >
              <div className='text-2xl mb-1'>
                {correctPath === '/' ? <GoHomeFill /> : <GoHome />}
              </div>
              <div className='text-sm'>خانه</div>
            </Link>
          </li>
          <li>
            <Link
              href='/categories'
              className='flex flex-col items-center text-dark-brown'
            >
              <div className='text-2xl mb-1'>
                {correctPath === '/categories' ? (
                  <MdCategory />
                ) : (
                  <MdOutlineCategory />
                )}
              </div>
              <div className='text-sm'>دسته بندی</div>
            </Link>
          </li>
          <li>
            <Link
              href='/shopping-cart'
              className='flex flex-col items-center text-dark-brown'
            >
              <div className='text-2xl mb-1'>
                {correctPath === '/shopping-cart' ? (
                  <MdShoppingCart />
                ) : (
                  <MdOutlineShoppingCart />
                )}
              </div>
              <div className='text-sm'>سبد خرید</div>
            </Link>
          </li>
          <li>
            <Link
              href='/account'
              className='flex flex-col items-center text-dark-brown'
            >
              <div className='text-lg mb-1'>
                {correctPath === '/account' ? <FaUser /> : <FaRegUser />}
              </div>
              <div className='text-sm'>کاربری</div>
            </Link>
          </li>
        </ul>
      </nav>
      {/* )} */}
    </>
  )
}
