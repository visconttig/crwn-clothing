import { useState } from "react"; 
import Button from "../../components/button/button.component.jsx";
import FormInput from "../../components/form-input/form-input.component.jsx";
import { signInAuthUserWithEmailAndPassword} from "../../utils/firebase/firebase.utils";
import { signInWithGooglePopup } from "../../utils/firebase/firebase.utils";
import { createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";
import "./sign-in-form.styles.scss";


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
                    <Button type="button" buttonType="google" 
                    onClick={signInWithGoogle}>Google sign in</Button>

                    </div>

                </form>

               
            </div>
    );
}


export default SignInForm;