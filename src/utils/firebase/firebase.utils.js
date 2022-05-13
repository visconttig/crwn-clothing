import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { 
    getAuth, 
    signInWithRedirect, 
    signInWithPopup,
    GoogleAuthProvider
 } from "firebase/auth";

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

