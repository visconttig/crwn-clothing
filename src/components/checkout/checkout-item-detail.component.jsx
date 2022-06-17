import React from "react";
import "./checkout-item-detail.styles.scss";
import { CartContext } from "../../contexts/cart.context";
import { useContext } from "react";

const CheckoutItemDetail = ({product}) => {
    const { id, name, quantity, price, imageUrl} = product;
    const { addToCart, removeOrDecreaseFromCart, deleteFromCart } = useContext(CartContext);

    const deleteFromCartHandler = () => deleteFromCart(product);
    

    return (
        <div className="product-detail-container">
        <div className="image-div">
            <img src={imageUrl} />
        </div>
        <span className="name">{name}</span>       
        <span className="quantity">{quantity}</span>
        <span className="price">{price}</span>
        <div className="remove-button" onClick={deleteFromCartHandler}>&#10005;</div>
    </div>  
    );
}

export default CheckoutItemDetail;