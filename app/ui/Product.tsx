import { Link } from 'remix'
import Rating from './Rating'

type rating = {
  rate: number
  count: number
}

export type PRODUCT = {
  id: string
  title: string
  price: number
  description: string
  category: string
  image: string
  rating: rating
  sold: number
  quantity: number
}

const Product = ({ product: { id, image, title, rating, price } }: { product: PRODUCT }) => {
  return (
    <Link to={`/products/${id}`}>
      <div className='bg-slate-200 w-80 h-96 shadow-lg rounded-xl m-4  overflow-hidden'>
        <img src={image} className='w-full h-72 object-cover shadow-sm' />
        <div className='p-2 flex flex-col'>
          <p className='font-medium text-md text-gray-600 my-2 truncate'>{title}</p>
          <div className='flex items-center my-2 justify-between'>
            <div className='flex items-center'>
              <Rating rate={rating.rate} />
              <span className='text-sm ml-1 font-semibold'>{rating.rate}/5</span>
            </div>
            <span className='font-semibold text-blue-800 tracking-wider'>{`$${price}`}</span>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default Product
