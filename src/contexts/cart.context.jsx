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
    cartCount: 0,
    checkoutTotal: 0,
    setCheckoutTotal: () => null
});

 export const CartContextProvider = ({children}) => {
    const [isCartOpen, setCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [cartCount, setCartCount] = useState(0);
    const [checkoutTotal, setCheckoutTotal] = useState(0);

      useEffect(() => {
        const itemsTotal = cartItems.reduce((prev, next) => {
          return prev + next.quantity;
        }, 0);
        
        setCartCount(itemsTotal);
      }, [cartItems]);

      useEffect(() => {
        const newCheckoutTotal = cartItems.reduce((prev, next) => {
          return prev + (next.price * next.quantity);
        }, 0);

        setCheckoutTotal(newCheckoutTotal);
      }, [cartItems]);


      const addToCart = (itemToAdd) => {
        setCartItems(checkAndAddToCart(cartItems, itemToAdd));
      }

      

      const removeOrDecreaseFromCart = (itemToRemove) => {
        let newCartItems;
        if(itemToRemove.quantity === 1){
          // newCartItems = cartItems.filter(function(item) {
          //   return item.id === itemToRemove.id ? false : true;
          // });
          newCartItems = cartItems.filter((item) =>  { return item.id === itemToRemove.id 
            ? false 
            : true});
        } else {
          newCartItems = cartItems.map((item) => (item.id === itemToRemove.id ?
            {...item, quantity: item.quantity -1}
            : item));
        }

          setCartItems(newCartItems);
    }

    const deleteFromCart = (itemToRemove) => {
      const newCartItems = cartItems.filter((item) => {
        return item.id !== itemToRemove.id;
      });

      setCartItems(newCartItems);
    }




    const values = { isCartOpen, setCartOpen, cartItems, 
      addToCart, cartCount, removeOrDecreaseFromCart, deleteFromCart, checkoutTotal};
    
    return <CartContext.Provider value={values}>{children}</CartContext.Provider>
}


