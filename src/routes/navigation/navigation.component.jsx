import { Outlet, Link } from "react-router-dom";
import { ReactComponent as CrwnLogo} from "../../assets/crown.svg";
import { NavigationContainer, LogoContainer, NavLinks, NavLink } from "./navigation.styles.jsx";


import CartIcon from "../../components/cart-icon/cart-icon.component.jsx";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component.jsx";
import { CartContext } from "../../contexts/cart.context.jsx";

import { UserContext } from "../../contexts/user.context.jsx";
import { useContext } from "react";
import { SignOutUser } from "../../utils/firebase/firebase.utils.js";





const Navigation = () => {
    const { currentUser } = useContext(UserContext);
    const { isCartOpen } = useContext(CartContext);

    

    return (
        <>
            <NavigationContainer>
                <LogoContainer to="/">
                    <CrwnLogo className="logo"/>
                </LogoContainer>
                <NavLinks>
                    <NavLink to="/shop">
                    SHOP
                    </NavLink>
                    {
                        currentUser ? (<NavLink as='span' onClick={SignOutUser}>SIGN OUT</NavLink>) 
                        : (<NavLink to="/auth">
                        SIGN IN
                    </NavLink>)
                    }
                  <CartIcon/>
                </NavLinks>
                { isCartOpen ? (<CartDropdown />) : null }
            </NavigationContainer>
            <Outlet/>
        </>
    );
}

export default Navigation;