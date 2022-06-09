import { Outlet, Link } from "react-router-dom";
import { ReactComponent as CrwnLogo} from "../../assets/crown.svg";
import "./navigation.styles.scss";

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
            <div className="navigation">
                <Link className="logo-container" to="/">
                    <CrwnLogo className="logo"/>
                </Link>
                <div className="nav-links-container">
                    <Link  className="nav-link" to="/shop">
                    SHOP
                    </Link>
                    {
                        currentUser ? (<span className="nav-link" onClick={SignOutUser}>SIGN OUT</span>) 
                        : (<Link className="nav-link" to="/auth">
                        SIGN IN
                    </Link>)
                    }
                  <CartIcon/>
                </div>
                { isCartOpen ? (<CartDropdown />) : null }
            </div>
            <Outlet/>
        </>
    );
}

export default Navigation;