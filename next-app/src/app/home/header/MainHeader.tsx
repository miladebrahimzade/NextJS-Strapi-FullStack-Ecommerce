import Link from 'next/link'
import SearchBar from './SearchBar'
import Image from 'next/image'
import logo from '@/assets/logo.png'
import HeaderNav from '@/app/home/nav/HeaderNav'

export default function MainHeader() {
  return (
    <div className='flex justify-between pt-2 px-4 items-center '>
      <SearchBar />
      <Link href='/'>
        <Image src={logo} height={72} alt='jahaz-online-logo' />
      </Link>
      <HeaderNav />
    </div>
  )
}
