import Stripe from 'stripe'
import { ActionFunction, json } from 'remix'
import { db } from '~/utils/db.server'

type Item = {
  id: string
  quantity: number
}

const stripe_sec_key = process.env.STRIPE_SECRET_KEY

const stripe = new Stripe(stripe_sec_key as string, {
  apiVersion: '2020-08-27'
})

const calculateOrderAmount = async (items: Item[]) => {
  // Replace this constant with a calculation of the order's amount
  // Calculate the order total on the server to prevent
  // people from directly manipulating the amount on the client

  const itemsDBPrices = (
    await Promise.all(
      items.map(async (curr) => {
        const item = await db.product.findUnique({
          where: {
            id: curr.id
          }
        })
        return Number(item?.price) * curr.quantity
      })
    )
  ).reduce((acc, curr) => acc + curr, 0)

  return Math.round(itemsDBPrices * 100)
}

export const action: ActionFunction = async ({ request }) => {
  const { items } = await request.json()

  // Create a PaymentIntent with the order amount and currency
  const paymentIntent = await stripe.paymentIntents.create({
    amount: await calculateOrderAmount(items),
    currency: 'usd',
    automatic_payment_methods: {
      enabled: true
    }
  })

  return json({ clientSecret: paymentIntent.client_secret }, 200)
}
