
import React from 'react'
import { CartProvider } from './CartContext'
import Cart from './Cart'

const CartPage = () => {
  return (
    <>
    <CartProvider>
        <Cart/>
    </CartProvider>
    </>
  )
}

export default CartPage
