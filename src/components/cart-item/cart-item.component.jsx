import React from "react";
import "./cart-item.styles.scss";

const CartItem = ({ cartItem }) => {
    const { id, name, price, quantity, imageUrl } = cartItem;
    return (
        <div className="cart-item-container">
            <img className="image" src={imageUrl} /> 
            <div className="item-details-container">
                <span className="name">{name}</span>
                <span className="quantity">{quantity}  x  ${price}</span>
            </div>
        </div>
    );
}

export default CartItem;