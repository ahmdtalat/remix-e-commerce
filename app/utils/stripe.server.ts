// import Stripe from 'stripe'

// const stripe = new Stripe(
//   'sk_test_51KFI55GhvjwAbtTkJbQpjJKZC1tfowQXS3z65RoGqJNBFhDbAUMKS6dNG5nl23gU9BH6uNX7Ip9ysduFE3MjlfQG00Roxmkm5i',
//   {
//     apiVersion: '2020-08-27'
//   }
// )

// const calculateOrderAmount = (items: any[]) => {
//   // Replace this constant with a calculation of the order's amount
//   // Calculate the order total on the server to prevent
//   // people from directly manipulating the amount on the client
//   return 1400
// }

// export const createPaymentIntent = async ({ items }: { items: any[] }) => {
//   // Create a PaymentIntent with the order amount and currency
//   const paymentIntent = await stripe.paymentIntents.create({
//     amount: calculateOrderAmount(items),
//     currency: 'eur',
//     automatic_payment_methods: {
//       enabled: true
//     }
//   })

//   return {
//     clientSecret: paymentIntent.client_secret
//   }
// }
