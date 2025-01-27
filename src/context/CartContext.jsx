mport { createContext, useState } from "react";

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {

    const [cartData, setCartData] = useState([]);

    const addToCart = (item) => {
        let clone = [...cartData];

        let foundIndex = clone.findIndex((product) => product.id === item.id)


        // If item already exist in cart
        if (foundIndex !== -1) {
            clone[foundIndex].quantity += 1;
            setCartData(clone);
        }

        // If item doesn't exist in cart
        else {
            setCartData([...cartData, { ...item, quantity: 1 }]);
        }
    }

    const removeFromCart = (item) => {
        let clone = [...cartData]
        let foundIndex = clone.findIndex((product) => product.id === item.id)
        clone.splice(foundIndex, 1);
        setCartData(clone);
    }

    const clearCart = () => {
        setCartData([]);
    }

    const subtractFromCart = (item) => {
        let clone = [...cartData];

        let foundIndex = clone.findIndex((product) => product.id === item.id)


        // If item already exist in cart
        if (foundIndex !== -1) {
            clone[foundIndex].quantity -= 1;

            if(clone[foundIndex].quantity <= 0){
                removeFromCart(item);
            } else {
                setCartData(clone);
            }
            
        }
    }

    return (
        <CartContext.Provider value={{ cartData, addToCart, clearCart, removeFromCart, subtractFromCart }}>
            {children}
        </CartContext.Provider>

    )
}