import Stripe from 'stripe'
import { ActionFunction, json } from 'remix'
import { db } from '~/utils/db.server'

const stripe = new Stripe(
  'sk_test_51KFI55GhvjwAbtTkJbQpjJKZC1tfowQXS3z65RoGqJNBFhDbAUMKS6dNG5nl23gU9BH6uNX7Ip9ysduFE3MjlfQG00Roxmkm5i',
  {
    apiVersion: '2020-08-27'
  }
)

const calculateOrderAmount = () => {
  // Replace this constant with a calculation of the order's amount
  // Calculate the order total on the server to prevent
  // people from directly manipulating the amount on the client

  // const cart = await db.

  return 140 * 100
}

export const action: ActionFunction = async ({}) => {
  // Create a PaymentIntent with the order amount and currency
  const paymentIntent = await stripe.paymentIntents.create({
    amount: calculateOrderAmount(),
    currency: 'usd',
    automatic_payment_methods: {
      enabled: true
    }
  })

  return json({ clientSecret: paymentIntent.client_secret }, 200)
}
