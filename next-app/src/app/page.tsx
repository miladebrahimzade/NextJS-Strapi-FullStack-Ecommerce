import Image from 'next/image'
import Link from 'next/link'

import HomeSlider from '@/app/home/slider/HomeSlider'
import CategorySection from './home/categories/CategorySection'
import SpecialOffers from './home/offers/SpecialOffers'
import ProductSlider from '@/components/productSlider/ProductSlider'
import ScrollIcon from '@/components/ScrollIcon'

export default function Home() {
  return (
    <>
      <HomeSlider />
      <CategorySection />
      {/* <SpecialOffers /> */}
      {/* <ProductSlider /> */}
      {/* <CategorySection /> */}
      {/* <ProductSlider /> */}

      {/* <ScrollIcon /> */}
    </>
  )
}
