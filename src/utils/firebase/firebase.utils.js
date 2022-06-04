import { initializeApp } from "firebase/app";
import { 
    getFirestore, 
    doc, 
    getDoc,
    setDoc
} from "firebase/firestore";
import { 
    getAuth, 
    signInWithPopup,
    GoogleAuthProvider,
    createUserWithEmailAndPassword
 } from "firebase/auth";
 import { signInWithEmailAndPassword } from "firebase/auth";
 import { signOut } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCWddBCkb9Rd8gMDMEgVZwQkITGVda3mO8",
    authDomain: "crown-clothing-652d7.firebaseapp.com",
    projectId: "crown-clothing-652d7",
    storageBucket: "crown-clothing-652d7.appspot.com",
    messagingSenderId: "297167880942",
    appId: "1:297167880942:web:997d51e0770b59cc66e9ff"

};

// Initialize firebase 
const firebaseApp = initializeApp(firebaseConfig);

// create provider
const provider = new GoogleAuthProvider();

// set custom parameters
provider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();


export const createUserDocumentFromAuth = async (userAuth, aditionalInfo) => {
    const userDocRef = await doc(db, "users", userAuth.uid);


    const userSnapshot = await getDoc(userDocRef);

    // if user does not exist, create/set user in db from userAuth*
    if(!userSnapshot.exists()){
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt,
                ...aditionalInfo
            });
        } catch (error) {
            console.log("Error creating the user: ", error.message);
        }
    }
    // if user exists, return user
    return userDocRef;
}

export const createAuthUserWithEmailAndPassword = async (email, password) => { 
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    return userCredential;
   
};

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
    const { user } = await signInWithEmailAndPassword(auth, email, password);
    return user;
}

export const SignOutUser = () => {
    signOut(auth);
}; 

