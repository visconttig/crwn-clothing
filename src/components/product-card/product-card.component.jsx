import { React, useContext } from "react";
import "./product-card.styles.scss";
import Button from "../button/button.component.jsx";
import { CartContext } from "../../contexts/cart.context.jsx";

const ProductCard = ({ product }) => {
    const { id, name, price, imageUrl } = product;
    const { addToCart } = useContext(CartContext);

    const sendToCart = (testData) => {
        addToCart(testData);
    }

    return (
        <div className="product-card-container" key={id}>
            <img src={`${imageUrl})`} />

            <div className="footer">
                <span className="name">{name}</span>
                <span className="price">{price}</span>
            </div> 
            <Button onClick={() => sendToCart(product)} buttonType="inverted">ADD TO CART</Button> 
        </div>
    )
}

export default ProductCard;