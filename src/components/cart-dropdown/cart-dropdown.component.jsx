import { React } from "react";
import Button from "../button/button.component.jsx";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context.jsx";
import CartItem from "../cart-item/cart-item.component.jsx";
import { Link } from "react-router-dom";

import { CartDropDownContainer, CartItems } from "./cart-dropdown.styles.jsx";

const CartDropdown = () => {
    const { cartItems } = useContext(CartContext);
    return (
        <CartDropDownContainer>
            <CartItems>
            {cartItems.length 
                ? (cartItems.map((item) => (
                    <CartItem key={item.id} cartItem={item} />
                    
                ))) 
                : (
                    <span className="empty-message">Your cart is empty.</span>
                )}
            </CartItems>
            <Link to="/checkout" ><Button>GO TO CHECKOUT</Button></Link>
        </CartDropDownContainer>
    );
};

export default CartDropdown;