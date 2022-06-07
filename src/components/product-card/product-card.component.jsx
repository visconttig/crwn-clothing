import { React } from "react";
import "./product-card.styles.scss";

const ProductCard = ({id, name, price, imageUrl}) => {

    return (
        <div className="master" key={id}>
            <div className="product-container" style={
                {
                    backgroundImage: `url(${imageUrl})`
                }
            }>
                <button className="cart-button">ADD TO CART</button>
                
            </div>
            <div className="product-details-container">
                <span className="detail">{name}</span>
                <span className="detail">{price}</span>
            </div>
            
        </div>
    )
}

export default ProductCard;