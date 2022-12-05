import React from "react";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import CheckoutItemDetail from "./checkout-item-detail.component";
import { useEffect } from "react";

import { CheckoutContainer, CheckoutTitleBar, HeaderBlock, LastHeaderBlock, CheckoutTotal} from "./checkout.styles.jsx";


const Checkout = () => {
    const { cartItems, checkoutTotal, setCartOpen } = useContext(CartContext);

    useEffect(() => {
        setCartOpen(false);
    }, []);
    
    return (
        <CheckoutContainer>
            <CheckoutTitleBar>
                <HeaderBlock>
                    <span>Product</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Description</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Quantity</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Price</span>
                </HeaderBlock>
                <LastHeaderBlock>
                    <span>Remove</span>
                </LastHeaderBlock>
            </CheckoutTitleBar>
            { cartItems.map((product) => (
               <CheckoutItemDetail product={product} key={product.id}/> 
            ))}
            <CheckoutTotal as="span" >Total: $ {checkoutTotal}</CheckoutTotal>
        </CheckoutContainer>
    );
}

export default Checkout;