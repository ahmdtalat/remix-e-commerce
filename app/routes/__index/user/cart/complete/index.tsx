import { LoaderFunction, redirect } from 'remix'

export const loader: LoaderFunction = async ({ request }) => {
  if (!request.url.includes('payment_intent') && !request.url.includes('redirect_status=succeeded'))
    return redirect('/')
  return null
}

const complete = () => {
  return <div>Order was placed Successfully</div>
}

export default complete
