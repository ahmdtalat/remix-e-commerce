import { Link, useOutletContext } from 'remix'
import { useEffect, useMemo, useState } from 'react'

import { Cart, OutletContext } from '../products/$id'

export const meta = () => ({
  title: 'User | Cart'
})

const Cart = () => {
  const [cart, setCart] = useState<Cart | null>(null)
  const { setTotalItemsCount } = useOutletContext<OutletContext>()

  const totalPrice = useMemo(() => cart?.products.reduce((acc, curr) => (acc += curr.price), 0), [cart])
  const totalItemsCount = useMemo(() => cart?.products.reduce((acc, curr) => (acc += curr.count), 0), [cart])

  const handleRemoveItem = (id: string) => {
    if (cart) {
      const updatedCart = { ...cart, products: cart.products.filter((item) => item.id !== id) }

      const totalItems = updatedCart.products.reduce((acc, curr) => acc + curr.count, 0)
      localStorage.setItem('cart', JSON.stringify(updatedCart))

      setCart(updatedCart)
      setTotalItemsCount(totalItems)
    }
  }

  useEffect(() => {
    setCart(JSON.parse(localStorage.getItem('cart') as string))
  }, [])

  if (!cart?.products.length)
    return <span className='text-md text-center font-semibold text-gray-600'>you cart is empty</span>

  return (
    <div className='h-3/4 w-11/12 xl:h-1/2 xl:w-1/2  bg-white rounded-lg p-4 shadow-md flex flex-col justify-center items-center'>
      <div className='h-full w-full  overflow-y-auto '>
        {cart?.products.map((item) => (
          <div
            key={item.id}
            className='bg-blue-100 rounded-md h-28 xl:h-20 w-full my-3 shadow-md flex items-center text-sm xl:text-base'
          >
            <img src={item.image} className='w-20 h-full xl:h-20 overflow-hidden object-cover rounded-md shadow ' />
            <div className='ml-2 flex flex-col items-start h-full p-2 w-full'>
              <Link to={`/products/${item.id}`}>
                <p className='text-blue-800 font-semibold '>{item.title}</p>
              </Link>
              <div className='mt-auto flex items-center justify-between w-full'>
                <div>
                  <span className='font-bold text-sm'>Quantity: {item.count}</span>
                  <span
                    className='text-sm tracking-tight ml-2 font-semibold text-blue-800 cursor-pointer'
                    onClick={() => handleRemoveItem(item.id)}
                  >
                    remove
                  </span>
                </div>
                <span className='font-bold text-gray-600 mr-4'>
                  $
                  {item.price
                    .toFixed(2)
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className='flex flex-col w-full mt-4'>
        <span className='font-semibold text-gray-800 text-lg'>
          Total ({totalItemsCount}): $
          {(totalPrice || 0)
            .toFixed(2)
            .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
        </span>
        <button className='bg-yellow-500 hover:bg-orange-300 text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline min-w-full h-14 mt-4 shadow-md'>
          Proceed to Buy
        </button>
      </div>
    </div>
  )
}

export default Cart
