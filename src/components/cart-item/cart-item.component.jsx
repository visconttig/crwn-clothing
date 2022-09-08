import React from "react";
import { CartItemContainer, ItemDetailsContainer, Image, Name} from "./cart-item.styles.jsx";

const CartItem = ({ cartItem }) => {
    const { id, name, price, quantity, imageUrl } = cartItem;
    return (
        <CartItemContainer>
            <Image src={imageUrl} /> 
            <ItemDetailsContainer>
                <Name>{name}</Name>
                <span className="quantity">{quantity}  x  ${price}</span>
            </ItemDetailsContainer>
        </CartItemContainer>
    );
}

export default CartItem;