'use client'
import React from 'react'
import { useRouter } from 'next/navigation'

let timer = null
const Search = ({ currentParams = {}, defaultValue = '' }) => {
  const router = useRouter()
  const handleChange = (e) => {
    const name = e.target.value
    const url = new URLSearchParams({
      ...currentParams,
      name,
      page: 1
    })
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      router.push(`?${url.toString()}`)
    }, 300)
  }
  return (
    <input
      type='text'
      placeholder='Search'
      defaultValue={defaultValue}
      className='input input-bordered input-primary w-full max-w-xs'
      onChange={handleChange}
    />
  )
}

export default Search
