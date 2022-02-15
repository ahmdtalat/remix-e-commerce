import { useEffect, useState } from 'react'
import { LoaderFunction, Outlet, useLoaderData } from 'remix'

import Navbar from '~/ui/Navbar'
import { getUser } from '~/utils/session.server'
import { Cart } from './__index/products/$id'

export const loader: LoaderFunction = async ({ request }) => {
  const user = await getUser(request)
  return user
}

export default function Index() {
  const user = useLoaderData()
  const [totalItemsCount, setTotalItemsCount] = useState<number>(0)

  useEffect(() => {
    const cart: Cart = JSON.parse(localStorage.getItem('cart') as string)
    setTotalItemsCount(() => cart?.products.reduce((acc, curr) => acc + curr.count, 0))
  }, [])
  return (
    <>
      {!user ? null : <Navbar user={user} totalItemsCount={totalItemsCount} />}
      <Outlet
        context={{
          setTotalItemsCount
        }}
      />
    </>
  )
}
