import React from "react";
import { createContext , useState, useEffect } from "react";



const checkAndAddToCart = (productsArray, productToAdd) => {
    const foundItem = productsArray.find((product) => product.id === productToAdd.id);

    if(foundItem){
        const newProductsArray = productsArray.map((product) => product.id === productToAdd.id 
        ? {...product, quantity: product.quantity + 1 }
        : product );

        return newProductsArray;
    }

    return [...productsArray, {...productToAdd, quantity: 1}];
}


export const CartContext = createContext({
    isCartOpen: false,
    setCartOpen: () => null,
    cartItems: [],
    setCartItems: () => null,
    cartCount: 0
});

 export const CartContextProvider = ({children}) => {
    const [isCartOpen, setCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [cartCount, setCartCount] = useState(0);

      useEffect(() => {
        const itemsTotal = cartItems.reduce((prev, next) => {
          return prev + next.quantity;
        }, 0);
        
        setCartCount(itemsTotal);
      }, [cartItems]);


      const addToCart = (itemToAdd) => {
        setCartItems(checkAndAddToCart(cartItems, itemToAdd));
      }




    const values = { isCartOpen, setCartOpen, cartItems, addToCart, cartCount};
    
    return <CartContext.Provider value={values}>{children}</CartContext.Provider>
}


