import React, { createContext, useEffect, useState } from 'react';
import {getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword,signOut, onAuthStateChanged} from 'firebase/auth';
import app from '../firebase/firebase.config';
import { faSignOut } from '@fortawesome/free-solid-svg-icons';


export const AuthContext = createContext();
const auth =getAuth(app)


const UserContext = ({children}) => {
    const [user,setUser] = useState(null)  
    

    const createNewUser = (email,password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const userSingIn = (email,password) => {
        return signInWithEmailAndPassword(auth,email,password)
    }

    const userLogOut =() => {
        return signOut(auth)
    }
    useEffect( ()=> {
        const unSubscribe = onAuthStateChanged(auth, currentUser =>{
            console.log(currentUser);
            setUser(currentUser);
        })
        return () => unSubscribe()
    },[])

    const authInfo ={user, createNewUser, userSingIn, userLogOut}

    return (
        <div>
            <AuthContext.Provider value ={authInfo}>
            {children}
            </AuthContext.Provider>  
        </div>
    );
};

export default UserContext;