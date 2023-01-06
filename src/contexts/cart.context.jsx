import React from "react";
import { createContext , useEffect } from "react";
import { useReducer } from "react";




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

export const CART_ACTION_TYPES = {
  SET_CART_OPEN : "SET_CART_OPEN",
  SET_CART_ITEMS : "SET_CART_ITEMS",
  SET_CART_COUNT : "SET_CART_COUNT",
  SET_CHECKOUT_TOTAL : "SET_CHECKOUT_TOTAL"
};

const cartReducer = (state, action) => {
   const { type, payload } = action;

   switch(type){
    case CART_ACTION_TYPES.SET_CART_OPEN:
      return {
        ...state,
        isCartOpen : payload
      }
    case CART_ACTION_TYPES.SET_CART_ITEMS:
      return {
        ...state,
        cartItems : payload
      }
    case CART_ACTION_TYPES.SET_CART_COUNT:
      return {
        ...state,
        cartCount : payload
      }
    case  CART_ACTION_TYPES.SET_CHECKOUT_TOTAL:
      return {
        ...state,
        checkoutTotal : payload
      }
      default:
        throw new Error(`Unhandled type ${type} in cartReducer.`);
   }
}

const INITIAL_STATE = {
  isCartOpen : false,
  cartItems : [],
  cartCount : 0,
  checkoutTotal : 0
};

 export const CartContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(cartReducer, INITIAL_STATE);
    const { isCartOpen, cartItems, cartCount, checkoutTotal } = state;

    const setCartCount = (itemsTotal) => {
      dispatch({
        type: CART_ACTION_TYPES.SET_CART_COUNT,
        payload: itemsTotal
      });
    }

    const setCheckoutTotal = (checkoutTotal) => {
      dispatch({
        type : CART_ACTION_TYPES.SET_CHECKOUT_TOTAL,
        payload : checkoutTotal
      });
    }

    const setCartItems = (cartItems) => {
        dispatch({
          type : CART_ACTION_TYPES.SET_CART_ITEMS,
          payload : cartItems
        });
    }

    const setCartOpen = (isCartOpen) => {
      dispatch({
        type : CART_ACTION_TYPES.SET_CART_OPEN,
        payload : isCartOpen
      });
    }

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


