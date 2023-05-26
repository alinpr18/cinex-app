'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export const SearchInput = (): JSX.Element => {
  const [searchQuery, setSearchQuery] = useState<string>('')
  const router = useRouter()

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault()
    if (searchQuery === '') return
    const encodedSearchQuery = encodeURI(searchQuery)
    router.push(`/search?q=${encodedSearchQuery}`)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setSearchQuery(e.target.value)
  }

  return (
    <>
      <form onSubmit={handleSubmit} className='rounded-lg overflow-auto flex'>
        <input onChange={handleChange} placeholder='Marvel' className='bg-[#EEEAF2] px-4 py-2 w-full' type='text' />
        <button className='w-[51px] bg-black flex items-center justify-center'>🔍</button>
      </form>
    </>
  )
}
