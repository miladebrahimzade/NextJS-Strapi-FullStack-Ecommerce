import Category from './Category'

export default function CategorySection() {
  interface Category {
    size: number
    category: string
    imgUrl: string
    path: string
  }

  const categories: Category[] = [
    {
      size: 1,
      category: 'ملزومات خانه',
      imgUrl: '/categories/home-stuff.jpg',
      path: 'shop/?category=home-stuff',
    },
    {
      size: 1,
      category: 'سرویس های غذاخوری',
      imgUrl: '/categories/dishes.jpg',
      path: 'shop/?category=dishes',
    },
    {
      size: 1,
      category: 'سرویس های پخت و پز',
      imgUrl: '/categories/cooking-utensils.jpg',
      path: 'shop/?category=cooking-utensils',
    },
    {
      size: 1,
      category: 'ملزومات آشپزخانه',
      imgUrl: '/categories/kitchen-tools.jpg',
      path: 'shop/?category=kitchen-tools',
    },
    {
      size: 2,
      category: 'سایر ظروف',
      imgUrl: '/categories/other-utensils.jpg',
      path: 'shop/?category=other-utensils',
    },
  ]

  return (
    <div className='mt-2 px-4'>
      <h1 className='text-center text-xl'>دسته بندی های ایـران جهـاز</h1>

      <div className='grid grid-cols-2 gap-4 mt-4'>
        {categories.map((item) => (
          <Category
            key={item.category}
            size={item.size}
            category={item.category}
            imgUrl={item.imgUrl}
            path={item.path}
          />
        ))}
      </div>
    </div>
  )
}
