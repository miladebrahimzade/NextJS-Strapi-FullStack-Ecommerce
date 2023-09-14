import Image from 'next/image'
import Link from 'next/link'
import Button from '@/components/Button'
export default function Home() {
  return (
    <div>
      <h1>Home</h1>
      <div>
        <Link href='/shop'>Check Shop</Link>
      </div>
      <div>
        <Link href='/blog'>Check blog</Link>
      </div>
      <div>
        <Button />
      </div>
    </div>
  )
}
