import { createContext, useState, useEffect, useContext } from 'react';

const CartContext = createContext();
export const useCartContext = () => useContext(CartContext);

const init = JSON.parse(localStorage.getItem('cart')) || [];

const CartProvider = ({ children }) => {

    const [cart, setCart] = useState(init);

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);

    return (
        <CartContext.Provider value={{ cart }}>
            {children}
        </CartContext.Provider>
    );
};

export default CartProvider;