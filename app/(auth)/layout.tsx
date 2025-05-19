import React from 'react'

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className='bg-pink-500 w-screen h-screen'>
      <p className='text-5xl'>Hey</p>
      {children}
    </div>
  )
}
