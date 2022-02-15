import { useEffect } from 'react'
import { LoaderFunction, redirect } from 'remix'

export const loader: LoaderFunction = async ({ request }) => {
  const clientSecret = new URL(request.url).searchParams.get('payment_intent_client_secret')

  if (!clientSecret) return redirect('/')

  return { clientSecret }
}

const complete = () => {
  useEffect(() => {
    // In our demo, we clear the cart after a success
    localStorage.removeItem('cart')
  }, [])

  return <div className=' text-blue-800 font-medium'>Your Order was placed Successfully</div>
}

export default complete
