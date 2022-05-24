import { useState } from "react";
import { createAuthUserWithEmailAndPassword } from "../../utils/firebase/firebase.utils";
import { createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";

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

        if(password != confirmPassword){
            alert("Passwords dont match!");
            return;
        }

        try{
            const { user } = await createAuthUserWithEmailAndPassword(email, password);

            await createUserDocumentFromAuth(user, {displayName});
            resetFormFields();

        } catch(error){
            if(error.code == "auth/email-already-in-use"){
                alert("Cannot create user, email already in use.");
            } else {
                console.log("Error creating the user", error);
            }
        }

        
    };

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormValues({
            ...formValues,
            // this is to replace the actual key value.
           [name]: value
        });

      
    }


    return (
        <>
            <h1>I dont have an account</h1>
            <p>Sign up with your email and password</p>

            <form onSubmit={ handleSubmit }>
                <label>Display Name</label>
                <input type="text" 
                value={displayName} 
                name="displayName" 
                onChange={handleChange} 
                required />

                <label>Email</label>
                <input type="email" 
                value={email} 
                name="email"
                onChange={handleChange} 
                required />

                <label>Password</label>
                <input type="password" 
                value={password} 
                name="password"
                onChange={handleChange}
                required
                minLength={6} />

                <label>Confirm password</label>
                <input type="password" 
                value={confirmPassword} 
                name="confirmPassword"
                onChange={handleChange} 
                required
                minLength={6} />

                <button type="submit" >Submit form</button>
            </form>
        </>
    );
} 
    export default SignUpForm;