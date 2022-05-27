import { useState } from "react"; 
import Button from "../../components/button/button.component.jsx";
import FormInput from "../../components/form-input/form-input.component.jsx";
import { signInUserWithEmailAndPassword} from "../../utils/firebase/firebase.utils";
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

        setFormValues({
            ...formValues,
            [name]: value
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        
        try {
            const userCredential = await signInUserWithEmailAndPassword(email, password);
        console.log(userCredential);
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
        setFormValues({defaultFormValues});
    };

    const signInWithGoogle = async () => {
        const {user} = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user);
    };
    return (
            <div className="sign-in-container">
                <h1>Sign in page</h1>
                <h2>I alrady have an account</h2>
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

                    <Button buttonType="google" onClick={signInWithGoogle}>Google sign in</Button>

                    </div>

                </form>

               
            </div>
    );
}


export default SignInForm;