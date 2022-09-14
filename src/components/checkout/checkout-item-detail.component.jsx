import React from "react";
import { CartContext } from "../../contexts/cart.context";
import { useContext } from "react";

import { ProductDetailContainer, ImageDiv, Img, Name, Quantity, Arrow, Price, Value, RemoveButton } from "./checkout-item-detail.styles.jsx";

const CheckoutItemDetail = ({product}) => {
    const { id, name, quantity, price, imageUrl} = product;
    const { addToCart, removeOrDecreaseFromCart, deleteFromCart } = useContext(CartContext);

    const deleteFromCartHandler = () => deleteFromCart(product);
    const decreaseItemHandler = () => removeOrDecreaseFromCart(product);
    const increseItemHandler = () => addToCart(product);
    

    return (
        <ProductDetailContainer className="product-detail-container">
        <ImageDiv>
            <Img src={imageUrl} />
        </ImageDiv>
        <Name as="span">{name}</Name>       
        <Quantity as="span">
            <Arrow onClick={decreaseItemHandler}>
            &#10094;
            </Arrow>
                <Value as="span">
                    {quantity}
                </Value>
            <Arrow onClick={increseItemHandler}>
            &#10095;
            </Arrow>
        </Quantity>
        <Price as="span">{price}</Price>
        <RemoveButton onClick={deleteFromCartHandler}>&#10005;</RemoveButton>
    </ProductDetailContainer>  
    );
}

export default CheckoutItemDetail;