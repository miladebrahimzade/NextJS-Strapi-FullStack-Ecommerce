'use client'

import { useState } from 'react'
import { GrSearch } from 'react-icons/gr'

export default function SearchBar(): JSX.Element {
  const [text, setText] = useState('')

  return (
    <div>
      <GrSearch className='text-2xl' />
    </div>
  )
}
