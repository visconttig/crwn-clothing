import { Outlet, Link } from "react-router-dom";
import { Fragment } from "react";
import { ReactComponent as CrwnLogo} from "../../assets/crown.svg";
import "./navigation.styles.scss";
import { UserContext } from "../../contexts/user.context.jsx";
import { useContext } from "react";
import { SignOutUser } from "../../utils/firebase/firebase.utils.js";


const Navigation = () => {
    const { currentUser, setCurrentUser } = useContext(UserContext);

    const signOut = () => {
        SignOutUser();
        setCurrentUser(null);
    }

    console.log("User:");
    console.log(currentUser);
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
                        currentUser ? (<span className="nav-link" onClick={signOut}>SIGN OUT</span>) 
                        : (<Link className="nav-link" to="/auth">
                        SIGN IN
                    </Link>)
                    }
                    
                </div>
            </div>
            <Outlet/>
        </>
    );
}

export default Navigation;