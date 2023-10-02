import Image from 'next/image'

export default function HomeSlider() {
  return (
    <div className='px-8 py-5 flex justify-center'>
      <Image
        src='/slider/slider.jpg'
        width={600}
        height={400}
        alt='slider'
        className='rounded-md'
      />
    </div>
  )
}
