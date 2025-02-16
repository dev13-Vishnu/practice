import React from 'react'
import { useCart } from './CartContext'

const Cart = () => {
    const {cart, addToCart, removeFromCart} = useCart();

  return (
    <div>
        <h2>Shopping Cart</h2>
        <button onClick={()=>addToCart("Item A")}> Add Item A</button>
        <button onClick={()=>addToCart("Item B")}>Add Item B</button>

        <ul>
            {cart.map((item, index) => (
                <li key={index}>{item} <button onClick={() => removeFromCart(item)}>Remove</button></li>
            ))}
        </ul>
      
    </div>
  )
}

export default Cart
