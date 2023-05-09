import React from 'react'
import Link from 'next/link'

const PageButtons = ({ total, page, currentParams = {} }) => {
  console.log(total, page)
  return (
    <div className='btn-group'>
      <Link
        className='btn'
        href={{
          query: {
            ...currentParams,
            page: 1
          }
        }}
      >
        Init
      </Link>
      <Link
        className='btn'
        href={{
          query: {
            ...currentParams,
            page: page <= 1 ? 1 : Number(page) - 1
          }
        }}
      >
        Prev
      </Link>
      <Link
        className='btn'
        href={{
          query: {
            ...currentParams,
            page: Number(page) === Number(total) ? Number(total) : Number(page) + 1
          }
        }}
      >
        Next
      </Link>
      <Link
        className='btn'
        href={{
          query: {
            ...currentParams,
            page: total
          }
        }}
      >
        End
      </Link>
    </div>
  )
}

export default PageButtons
