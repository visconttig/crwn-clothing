import { signInWithGooglePopup,
    createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";
import { useState } from "react"; 
import SignUpForm  from "../../components/sign-up-form/sign-up-form.component.jsx";
import Button from "../../components/button/button.component.jsx";

const SignIn = () => {
    const logGoogleUser = async () => {
        const {user} = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user);
    };
    return (
        <>
            <div>
                <h1>Sign in page</h1>
                <Button onClick={logGoogleUser} 
                buttonType="google">Sign-in with Google </Button>

                <SignUpForm />
            </div>
        </>
    );
}


export default SignIn;