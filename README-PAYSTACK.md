# ZARTZ — Paystack Test Checkout

This build adds Paystack test-mode checkout to the existing ZARTZ storefront.

## Environment variables

Set these in Vercel (do not commit the secret key):

- `PAYSTACK_SECRET_KEY` = your Paystack **test secret key**
- `PAYSTACK_PUBLIC_KEY` = your Paystack **test public key** (reserved for frontend integrations)

The secret key is only read by the Vercel serverless functions under `api/paystack/`.

## Payment flow

1. Customer adds artwork to the cart.
2. Customer enters an email address.
3. `/api/paystack/initialize` initializes the transaction server-side.
4. Paystack Popup V2 completes the payment.
5. Paystack returns a reference.
6. `/api/paystack/verify` verifies the transaction server-side.
7. The cart is cleared only after a successful verification response.

The current demo catalog stores prices in browser localStorage, so the initialization endpoint receives the cart amount from the browser. For a production marketplace, move product prices/orders to a trusted database and verify the expected amount server-side before fulfilling an order.

## Local test

Use a local server that supports the `/api` functions (for example Vercel CLI), then test with Paystack test mode.

## Deployment

Deploy the repository to Vercel and add the two Paystack environment variables in the Vercel project settings.