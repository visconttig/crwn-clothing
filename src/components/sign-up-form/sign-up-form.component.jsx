import { useState } from "react";
import { createAuthUserWithEmailAndPassword } from "../../utils/firebase/firebase.utils";
import { createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";
import FormInput from "../../components/form-input/form-input.component.jsx";
import "./sign-up-form.styles.scss";
import Button from "../../components/button/button.component.jsx";
import { BUTTON_TYPE_CLASSES } from "../../components/button/button.component.jsx";


const defaultFormValues = {
    displayName: "",
    email: "",
    password: "",
    confirmPassword: ""
};

const SignUpForm = () => {
    const [formValues, setFormValues] = useState(defaultFormValues);
    const {displayName, email, password, confirmPassword} = formValues;
    


    const resetFormFields = () => {
        setFormValues(defaultFormValues);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        if(password !== confirmPassword){
            alert("Passwords dont match!");
            return;
        }

        try{
            const { user } = await createAuthUserWithEmailAndPassword(email, password);

            await createUserDocumentFromAuth(user, {displayName});
            resetFormFields();

        } catch(error){
            if(error.code === "auth/email-already-in-use"){
                alert("Cannot create user, email already in use.");
            } else {
                console.log("Error creating the user", error);
            }
        }

        
    };

    const handleChange = (event) => {
        const { name, value } = event.target;

        
        // using functional update to prevent uncontrolled component WARNING !
        setFormValues(prevValues => {
            return {
                ...prevValues,
                [name]: value
            }
        });

      
    }


    return (
        <div className="sign-up-container">
            <h2>Don't have an account?</h2>
            <span>Sign up with your email and password</span>

            <form onSubmit={ handleSubmit }>

        
                <FormInput 
                type="text"
                label="Display Name"
                value={displayName} 
                name="displayName" 
                onChange={handleChange} 
                required />

                
                <FormInput 
                type="email"
                label="Email"
                value={email} 
                name="email"
                onChange={handleChange} 
                required />

                
                <FormInput 
                type="password"
                label="Password" 
                value={password} 
                name="password"
                onChange={handleChange}
                required
                minLength={6} />

                
                <FormInput 
                type="password"
                label="Confirm Password" 
                value={confirmPassword} 
                name="confirmPassword"
                onChange={handleChange} 
                required
                minLength={6} />


                <Button type="submit">Sign up</Button>
            </form>
        </div>
    );
} 
    export default SignUpForm;