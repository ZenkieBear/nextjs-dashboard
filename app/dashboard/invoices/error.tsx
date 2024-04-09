'use client'
import React, { useEffect } from 'react'

const Error = ({
  error, reset
}: {
  error: Error & { digest?: string },
  reset: () => void
}) => {
  useEffect(() => {
    console.log(error);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  
  return (
    <main className='h-full flex flex-col items-center justify-center'>
      <h2 className='text-center'>Something went wrong!</h2>
      <button
        className='mt-4 px-4 py-2 rounded-md bg-blue-500 text-sm text-white transition-colors hover:bg-blue-400'
        onClick={
          // Attempt to recover by trying to re-render the invoices route
          () => reset()
        }
      >
        Try again
      </button>
    </main>
  )
}

export default Error