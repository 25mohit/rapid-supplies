import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth } from "./firebase";
import { GoogleAuthProvider } from "firebase/auth/web-extension";

export const doCreateUserWithEmailAndPassword = async (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)
}
export const doSignInWithEmailAndPassoword = async (email, password) => {
    try {
        const result = await signInWithEmailAndPassword(auth, email, password)
        return result
    } catch (error) {
        throw error
    }
}

export const doSignInWithGoogle = async () => {
    const provider = new GoogleAuthProvider()
    try {
        const result = await signInWithPopup(auth, provider); // Sign in with Google
        return result;
    } catch (error) {
        console.error("Error during Google sign-in:", error);
        throw error;
    }
}
export const doSignOut = async () => {
    try {
        const res = await auth.signOut()
        return res
    } catch (error) {
        throw error
    }
}