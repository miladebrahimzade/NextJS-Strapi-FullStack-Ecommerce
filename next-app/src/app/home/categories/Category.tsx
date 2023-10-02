import Image from 'next/image'
import Link from 'next/link'

interface ComponentProps {
  size: number
  category: string
  imgUrl: string
  path: string
}

export default function Category({
  size,
  category,
  imgUrl,
  path,
}: ComponentProps) {
  return (
    <div className={`col-span-${size}`}>
      <Link href={path}>
        <Image
          src={imgUrl}
          width={500 * size}
          height={400}
          alt={category}
          className='rounded-xl shadow-md'
        />
      </Link>
    </div>
  )
}
