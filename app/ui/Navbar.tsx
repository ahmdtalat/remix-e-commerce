import { Link } from 'remix'
import { useState } from 'react'

import { User } from '@prisma/client'

const Navbar = ({ user, totalItemsCount }: { user: User; totalItemsCount: number }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className='flex w-full fixed top-0 items-center h-14 bg-slate-400 shadow-md z-10'>
      <Link to='/'>
        <span className='font-bold text-gray-700 ml-4'>E-commerce</span>
      </Link>

      <div className='flex items-center ml-auto mr-2'>
        <Link to='/user/cart'>
          <div className='relative'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              aria-hidden='true'
              data-prefix='fas'
              data-icon='shopping-cart'
              className='w-8'
              viewBox='0 0 576 512'
            >
              <path
                fill='#1d4ed8'
                d='m528.12 301.319 47.273-208C578.806 78.301 567.391 64 551.99 64H159.208l-9.166-44.81C147.758 8.021 137.93 0 126.529 0H24C10.745 0 0 10.745 0 24v16c0 13.255 10.745 24 24 24h69.883l70.248 343.435C147.325 417.1 136 435.222 136 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-15.674-6.447-29.835-16.824-40h209.647C430.447 426.165 424 440.326 424 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-22.172-12.888-41.332-31.579-50.405l5.517-24.276c3.413-15.018-8.002-29.319-23.403-29.319H218.117l-6.545-32h293.145c11.206 0 20.92-7.754 23.403-18.681z'
              />
            </svg>
            {!totalItemsCount ? null : (
              <div className='absolute -top-3 left-6 font-bold rounded-full bg-white w-6 h-6 p-1 text-center text-xs shadow'>
                {totalItemsCount}
              </div>
            )}
          </div>
        </Link>
        <div className='mx-8 font-bold relative cursor-pointer'>
          <span onClick={() => setIsOpen(true)}>{user.username}</span>
          {isOpen ? (
            <>
              <div
                className='fixed inset-0 bg-gray-500 bg-opacity-20 transition-opacity cursor-pointer'
                aria-hidden='true'
                onClick={() => setIsOpen(false)}
              />
              <div className='inline-block absolute -right-8 top-12 w-align-bottom bg-white  rounded-lg text-left overflow-hidden shadow-xl transform transition-all  sm:align-middle p-8'>
                <form method='post' action='/auth/logout'>
                  <button className='bg-blue-700 w-32  hover:bg-blue-500 text-white font-bold py-2 px-4 rounded'>
                    Logout
                  </button>
                </form>
              </div>
            </>
          ) : null}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
