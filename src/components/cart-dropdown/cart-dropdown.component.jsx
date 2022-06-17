import { React } from "react";
import "./cart-dropdown.styles.scss";
import Button from "../button/button.component.jsx";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context.jsx";
import CartItem from "../cart-item/cart-item.component.jsx";
import { Link } from "react-router-dom";

const CartDropdown = () => {
    const { cartItems } = useContext(CartContext);
    return (
        <div className="cart-dropdown-container">
            <div className="cart-items">
            {cartItems.length 
                ? (cartItems.map((item) => (
                    <CartItem key={item.id} cartItem={item} />
                    
                ))) 
                : (
                    <span className="empty-message">Your cart is empty.</span>
                )}
            </div>
            <Link to="/checkout" ><Button>GO TO CHECKOUT</Button></Link>
        </div>
    );
};

export default CartDropdown;