import React from "react";
import { createContext , useState, useEffect } from "react";


export const CartContext = createContext({
    isCartOpen: false,
    setCartOpen: () => null
});

 export const CartContextProvider = ({children}) => {
    const [isCartOpen, setCartOpen] = useState(false);
    const values = { isCartOpen, setCartOpen};

    

    return <CartContext.Provider value={values}>{children}</CartContext.Provider>
}


