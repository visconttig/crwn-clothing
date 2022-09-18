//import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context.jsx";
import { CartIconContainer, ShoppingIcon, ItemCount } from "./cart-icon.styles.jsx";

const CartIcon = () => {
    const {isCartOpen, setCartOpen, cartCount} = useContext(CartContext);


    const toggleCart = () => {
        setCartOpen(!isCartOpen);
    };

    return (
        <CartIconContainer onClick={toggleCart}>
            <ShoppingIcon/>
            <ItemCount>{cartCount}</ItemCount>
        </CartIconContainer>
    );
};


export default CartIcon;