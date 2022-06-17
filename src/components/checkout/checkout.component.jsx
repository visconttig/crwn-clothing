import React from "react";
import "./checkout.styles.scss";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import CheckoutItemDetail from "./checkout-item-detail.component";
import { useEffect } from "react";


const Checkout = () => {
    const { cartItems, checkoutTotal, setCartOpen } = useContext(CartContext);

    useEffect(() => {
        setCartOpen(false);
    }, []);
    
    return (
        <div className="checkout-container">
            <div className="checkout-title-bar">
                <div className="header-block">
                    <span>Product</span>
                </div>
                <div className="header-block">
                    <span>Description</span>
                </div>
                <div className="header-block">
                    <span>Quantity</span>
                </div>
                <div className="header-block">
                    <span>Price</span>
                </div>
                <div className="header-block">
                    <span>Remove</span>
                </div>
            </div>
            { cartItems.map((product) => (
               <CheckoutItemDetail product={product} key={product.id}/> 
            ))}
            <span className="checkout-total">Total: $ {checkoutTotal}</span>
        </div>
    );
}

export default Checkout;