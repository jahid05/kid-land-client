import { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile,  } from 'firebase/auth';
import { useState } from 'react';
import { useEffect } from 'react';
import app from '../../Firebase/firebase.config';

export const AuthContext = createContext(app)

const auth = getAuth(app)

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)


    const googleLoginPopup = (provider) => {
        setLoading(true);
        return signInWithPopup(auth, provider)

    }

    const updateUserProfile = (profile) => {
        setLoading(true);
        return updateProfile(auth.currentUser, profile)
    }



    const gitProviderLogin = (provider) => {
        setLoading(true);
        return signInWithPopup(auth, provider)

    }



    const logOut = () => {
        setLoading(true);
        return signOut(auth)
    }

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }


    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {

            setUser(currentUser)
            setLoading(false);
        });

        return () => {
            unsubscribe();
        }
    }, [])




    const authInfo = { user,  googleLoginPopup, logOut, createUser, signIn, loading, gitProviderLogin, updateUserProfile, setLoading }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;