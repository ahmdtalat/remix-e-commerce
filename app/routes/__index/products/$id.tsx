import { useMemo, useState } from 'react'
import { LoaderFunction, MetaFunction, useLoaderData, useOutletContext, useParams } from 'remix'

import { db } from '~/utils/db.server'
import { PRODUCT } from '~/ui/Product'
import Rating from '~/ui/Rating'

export type Item = {
  id: string
  title: string
  image: string
  price: number
  count: number
}

export type Cart = {
  products: Item[]
}

export const meta: MetaFunction = ({ data }) => {
  return {
    title: data.title
  }
}

export const loader: LoaderFunction = async ({ params }) => {
  const { id } = params
  return await db.product.findUnique({
    where: {
      id
    },
    include: {
      rating: true
    }
  })
}

export type OutletContext = {
  setTotalItemsCount: (val: number) => void
}

const Index = () => {
  const {
    id,
    image,
    price,
    sold,
    title,
    quantity,
    description,
    rating: { rate, count }
  } = useLoaderData<PRODUCT>()
  const available = useMemo(() => quantity - sold, [quantity, sold])

  const [fullImageModal, setFullImageModal] = useState(false)

  const { setTotalItemsCount } = useOutletContext<OutletContext>()

  const handleAddToCar = () => {
    if (!localStorage.getItem('cart')) localStorage.setItem('cart', JSON.stringify({ products: [] }))
    const cart: Cart = JSON.parse(localStorage.getItem('cart') as string)

    const item = cart.products.find((item) => item?.id === id)

    if (!item) cart.products.push({ id, image, title, price: Number.parseFloat(price.toString()), count: 1 })
    else {
      item.price += Number.parseFloat(price.toString())
      item.count += 1
    }

    const totalItems = cart.products.reduce((acc, curr) => acc + curr.count, 0)
    setTotalItemsCount(totalItems)
    localStorage.setItem('cart', JSON.stringify(cart))
  }

  return (
    <>
      <div className='flex bg-pink-200 rounded-lg overflow-hidden shadow-lg w-11/12 sm:w-1/2 h-fit items-start flex-col lg:flex-row'>
        <div className='w-full lg:w-1/2 h-96  cursor-pointer' onClick={() => setFullImageModal(true)}>
          <img src={image} className='w-full h-full object-cover' alt={title} />
        </div>

        <div className='flex flex-col h-full p-3 w-full lg:w-1/2'>
          <div className='flex items-start justify-between mb-4'>
            <p className='font-bold text-sm md:text-md lg:text-lg text-blue-900'>{title}</p>
            <p className='font-semibold text-blue-700 tracking-wider ml-4 text-xl'>{`$${price
              .toString()
              .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`}</p>
          </div>

          <p className='text-sm tracking-wide font-medium'>
            <span className='font-bold'>Description: </span>
            {description}
          </p>

          <div className='flex xl:items-center justify-between mt-6 lg:mt-auto xl:flex-row flex-col-reverse '>
            <div className='flex w-fit items-center'>
              <Rating rate={rate} />
              <span className='ml-2'>({count})</span>
              <span className='text-xs font-semibold mx-2 text-red-800'>
                {available < 5 && available > 1 ? 'only a few left' : null}
              </span>
            </div>
            {available === 0 ? (
              <span className='px-4 py-2 rounded-md bg-red-700 text-white text-sm text-center font-medium'>
                Item Unavailable!
              </span>
            ) : (
              <button
                className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline min-w-fit shadow-md disabled:bg-blue-800'
                onClick={handleAddToCar}
              >
                Add to Card
              </button>
            )}
          </div>
        </div>
      </div>
      <Modal image={image} setFullImageModal={setFullImageModal} fullImageModal={fullImageModal} />
    </>
  )
}

export default Index

const Modal = ({
  image,
  setFullImageModal,
  fullImageModal
}: {
  image: string
  fullImageModal: boolean
  setFullImageModal: (state: boolean) => void
}) => (
  <div
    className={`fixed z-10 inset-0 overflow-y-auto ${fullImageModal ? 'block' : 'hidden'}`}
    aria-labelledby='modal-title'
    role='dialog'
    aria-modal='true'
  >
    <div className='flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0'>
      <div
        className='fixed inset-0 bg-gray-500 bg-opacity-80 transition-opacity cursor-pointer'
        aria-hidden='true'
        onClick={() => setFullImageModal(false)}
      ></div>

      <span className='hidden sm:inline-block sm:align-middle sm:h-screen' aria-hidden='true'>
        &#8203;
      </span>

      <div className='inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full p-8'>
        <img src={image} className='w-full h-1/2 object-cover' />
      </div>
    </div>
  </div>
)

export function ErrorBoundary() {
  const { id } = useParams()
  return <div className='text-red-700 font-bold text-lg'>{`There was an error loading product by the id [${id}].`}</div>
}
