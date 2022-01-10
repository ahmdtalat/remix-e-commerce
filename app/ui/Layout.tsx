import React from 'react'

interface Props {
  children: React.ReactNode
}

const Layout = ({ children }: Props) => {
  return (
    <div className='flex flex-col items-center h-screen justify-center overflow-hidden bg-gradient-to-r from-gray-300 via-purple-300 to-gray-300'>
      {children}
    </div>
  )
}

export default Layout
