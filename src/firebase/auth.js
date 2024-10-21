import { createUserWithEmailAndPassword, signInWithEmailAndPassoword, signInWithPopup } from "firebase/auth";
import { auth } from "./firebase";
import { GoogleAuthProvider } from "firebase/auth/web-extension";

export const doCreateUserWithEmailAndPassword = async (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)
}
export const doSignInWithEmailAndPassoword = async (email, password) => {
    return signInWithEmailAndPassoword(auth, email, password)
}
export const doSignInWithGoogle = async () => {
    const provider = new GoogleAuthProvider()
    const result = await signInWithPopup(auth, provider)
    return result
}
export const doSignOut = () => {
    return auth.signOut()
}