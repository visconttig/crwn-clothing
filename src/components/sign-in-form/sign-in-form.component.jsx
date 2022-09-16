import { useState } from "react"; 
import Button from "../../components/button/button.component.jsx";
import { BUTTON_TYPE_CLASSES } from "../../components/button/button.component.jsx";
import FormInput from "../../components/form-input/form-input.component.jsx";
import { signInAuthUserWithEmailAndPassword} from "../../utils/firebase/firebase.utils";
import { signInWithGooglePopup } from "../../utils/firebase/firebase.utils";
import { createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";
import { $SignInContainer, $H2, $ButtonsContainer } from "./sign-in-form.styles.jsx";


const defaultFormValues = {
    email: "",
    password: ""
};

const SignInForm = () => {
    const [formValues, setFormValues] = useState(defaultFormValues);
    const {email, password} = formValues;

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
            await signInAuthUserWithEmailAndPassword(email, password);
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
        await signInWithGooglePopup();   
    };

    return (
            <$SignInContainer>
                <$H2>I already have an account</$H2>
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

                    <$ButtonsContainer>
                    <Button type="submit">Sign in</Button>
                    <Button type="button" buttonType={BUTTON_TYPE_CLASSES.google} 
                    onClick={signInWithGoogle}>Google sign in</Button>

                    </$ButtonsContainer>

                </form>

               
            </$SignInContainer>
    );
}


export default SignInForm;