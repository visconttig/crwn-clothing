import { React, useContext } from "react";
import { BUTTON_TYPE_CLASSES } from "../button/button.component.jsx";
import { CartContext } from "../../contexts/cart.context.jsx";
import { $ProductCardContainer, $Img, $Footer, $Name, $Price, $Button } from "./product-card.styles.jsx";

const ProductCard = ({ product }) => {
    const { id, name, price, imageUrl } = product;
    const { addToCart } = useContext(CartContext);

    const sendToCart = (testData) => {
        addToCart(testData);
    }

    return (
        <$ProductCardContainer key={id}>
            <$Img src={`${imageUrl})`} />

            <$Footer>
                <$Name>{name}</$Name>
                <$Price>{price}</$Price>
            </$Footer> 
            <$Button onClick={() => sendToCart(product)} buttonType={BUTTON_TYPE_CLASSES.inverted}>ADD TO CART</$Button> 
        </$ProductCardContainer>
    )
}

export default ProductCard;