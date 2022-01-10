import { useLoaderData } from 'remix'

import { db } from '~/utils/db.server'
import Product, { PRODUCT } from '~/ui/Product'

export const meta = () => {
  return {
    title: 'Home'
  }
}

export const loader = async () => {
  return await db.product.findMany({
    include: {
      rating: true
    }
  })
}

const Home = () => {
  const products = useLoaderData<PRODUCT[]>()
  return (
    <div className='w-full h-full max-h-fit overflow-y-auto pt-20'>
      <p className='font-bold text-xl text-blue-600 my-8 text-center tracking-wide'>All products</p>
      <div className='h-fit max-w-screen-2xl mx-auto grid grid-cols-card grid-rows-card gap-2 justify-items-center  overflow-hidden'>
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}

export default Home
