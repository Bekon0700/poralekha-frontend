import { getAuth, createUserWithEmailAndPassword, 
        signInWithEmailAndPassword, 
        onAuthStateChanged, updateProfile, 
        signOut, GoogleAuthProvider, signInWithPopup, GithubAuthProvider } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "./../firebase/firebase.init";

export const authContext = createContext()

const auth = getAuth(app)

const googleProvider = new GoogleAuthProvider();
const gitProvider = new GithubAuthProvider();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [isLoading, setIsLoading] = useState(true)

    const userRegister = (email, password) => {
        setIsLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const updateUser = (info) => {
        setIsLoading(true)

        return updateProfile(auth.currentUser, info)
    }

    const userLogin = (email, password) => {
        setIsLoading(true)

        return signInWithEmailAndPassword(auth, email, password)
    }

    const userLogout = () => {
        setIsLoading(true)

        return signOut(auth)
    }

    const googleLogin = () => {
        setIsLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    const gitHubLogin = () => {
        setIsLoading(true)
        return signInWithPopup(auth, gitProvider)
    }

    useEffect(() => {
        const cleanUp = onAuthStateChanged(auth, (person) => {
            setUser(person)
            setIsLoading(false)
        })

        return () => cleanUp()
    }, [])

    const value = {
        user,
        userRegister,
        updateUser,
        userLogin,
        userLogout,
        googleLogin,
        isLoading,
        gitHubLogin
    }
    return (
        <authContext.Provider value={value}>
            {children}
        </authContext.Provider>
    )
}

export default AuthProvider