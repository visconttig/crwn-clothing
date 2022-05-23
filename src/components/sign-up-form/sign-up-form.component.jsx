import { ReactFragment, useState } from "react";

const defaultFormValues = {
    displayName: "",
    email: "",
    password: "",
    confirmPassword: ""
};

const SignUpForm = () => {
    const [formValues, setFormValues] = useState(defaultFormValues);
    const {displayName, email, password, confirmPassword} = formValues;

    const handleSubmit = (event) => {
        event.preventDefault();
    };

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormValues({
            ...formValues,
            // this is to replace the actual key value.
           [name]: value
        });

        console.log(formValues);
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
                required />

                <label>Confirm password</label>
                <input type="password" 
                value={confirmPassword} 
                name="confirmPassword"
                onChange={handleChange} 
                required />

                <button type="submit" >Submit form</button>
            </form>
        </>
    );
} 
    export default SignUpForm;