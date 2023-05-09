'use client' // Error components must be Client components

import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export default function Error ({
  error,
  reset
}) {
  const router = useRouter()
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <div className='w-full flex flex-col justify-center items-center text-center gap-4 min-h-[90vh]'>
      <p className='text-4xl'>Something went wrong!</p>
      <button
        className='btn btn-error'
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Try again
      </button>
      <p>or</p>
      <button
        className='btn btn-primary'
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => router.push('/')
        }
      >
        Home
      </button>
    </div>
  )
}
