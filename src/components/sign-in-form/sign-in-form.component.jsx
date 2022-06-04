import { useState } from "react"; 
import Button from "../../components/button/button.component.jsx";
import FormInput from "../../components/form-input/form-input.component.jsx";
import { signInAuthUserWithEmailAndPassword} from "../../utils/firebase/firebase.utils";
import { signInWithGooglePopup } from "../../utils/firebase/firebase.utils";
import { createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";
import "./sign-in-form.styles.scss";
import { UserContext } from "../../contexts/user.context.jsx";
import { useContext } from "react";

const defaultFormValues = {
    email: "",
    password: ""
};

const SignInForm = () => {
    const [formValues, setFormValues] = useState(defaultFormValues);
    const {email, password} = formValues;
    const { setCurrentUser } = useContext(UserContext);

    // test:
    const { currentUser } = useContext(UserContext);

    const handleChange = (event) => {
        const {name, value} = event.target;

        
        // using functional update to prevent uncontrolled component WARNING !
        setFormValues(prevValues => {
            return {
                ...prevValues,
                [name]: value
            }
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        
        try {
            const user = await signInAuthUserWithEmailAndPassword(email, password);
            setCurrentUser({user});
        
            console.log("current user:");
            console.log({currentUser});
            resetFormFields();
        
        } catch(error){
            if(error.code === "auth/user-not-found"){
                alert("User not found: please check the provided email account.");
            } else if (error.code === "auth/wrong-password"){
                alert("Wrong password: please try again.");
            } else {
                console.log(error);
            }
        }
    };

    const resetFormFields = () => {
        setFormValues(defaultFormValues);
    };

    const signInWithGoogle = async () => {
        const {user} = await signInWithGooglePopup();
        setCurrentUser({user});
        const userDocRef = await createUserDocumentFromAuth(user);
    };
    return (
            <div className="sign-in-container">
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={handleSubmit}>
                    <FormInput 
                    type="email"
                    label="email"
                    name="email"
                    value={email}
                    onChange={handleChange}
                    required />

                    <FormInput 
                        type="password"
                        label="password"
                        name="password"
                        value={password}
                        onChange={handleChange}
                        required
                    />

                    <div className="buttons-container">
                    <Button type="submit">Sign in</Button>

                    <Button type="button" buttonType="google" onClick={signInWithGoogle}>Google sign in</Button>

                    </div>

                </form>

               
            </div>
    );
}


export default SignInForm;