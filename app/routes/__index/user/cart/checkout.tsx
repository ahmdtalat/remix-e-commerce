import { useState, useEffect } from 'react'
import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'

import styles from '../../../../stripe.css'
import CheckOutForm from './checkoutForm'

export function links() {
  return [{ rel: 'stylesheet', href: styles }]
}

export const meta = () => {
  return {
    title: 'Checkout'
  }
}

const stripePromise = loadStripe(
  'pk_test_51KFI55GhvjwAbtTkGM9Bi8QEbkkJtWawYAtxLgEvKlyUfwxrpGnAr9aAEHSIjJ9Ly8oblJaXmp1M743QxAd7ld6f00Z9tmgCWK'
)

function Checkout() {
  const [clientSecret, setClientSecret] = useState('')

  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    fetch('/stripe/create-payment-intent', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' }
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret))
  }, [])

  const options = {
    clientSecret
  }

  return (
    <>
      {clientSecret && (
        <Elements options={options} stripe={stripePromise}>
          <CheckOutForm />
        </Elements>
      )}
    </>
  )
}

export default Checkout
