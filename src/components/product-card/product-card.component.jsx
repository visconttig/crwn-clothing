import { React } from "react";
import "./product-card.styles.scss";
import Button from "../button/button.component.jsx";

const ProductCard = ({id, name, price, imageUrl}) => {

    return (
        <div className="product-card-container" key={id}>
            <img src={`${imageUrl})`} />

            
            <div className="footer">
                <span className="name">{name}</span>
                <span className="price">{price}</span>
            </div> 
            <Button buttonType="inverted">ADD TO CART</Button> 
        </div>
    )
}

export default ProductCard;