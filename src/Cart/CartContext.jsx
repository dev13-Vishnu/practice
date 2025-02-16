import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([]);

    const addToCart = (item) => setCart([...cart, item]);

    const removeFromCart = (item) => setCart(cart.filter((i) => i !== item));

    return (
        <CartContext.Provider value={{cart, addToCart, removeFromCart}}>
            {children}
        </CartContext.Provider>
    )
    
}
export const useCart = () => useContext(CartContext);