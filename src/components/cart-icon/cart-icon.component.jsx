import "./cart-icon.styles.scss";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context.jsx";

const CartIcon = () => {
    const {isCartOpen, setCartOpen, cartCount} = useContext(CartContext);


    const toggleCart = () => {
        setCartOpen(!isCartOpen);
    };

    return (
        <div className="cart-icon-container" onClick={toggleCart}>
            <ShoppingIcon className="shopping-icon" />
            <span className="item-count">{cartCount}</span>
        </div>
    );
};


export default CartIcon;