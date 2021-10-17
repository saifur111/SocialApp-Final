import { getAuth, signInWithPopup, GoogleAuthProvider,signOut,onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useState } from "react";
import initializeAuthentication from "../pages/firebase/firebase.init";
initializeAuthentication();

const useFirebase =()=>{
    const [user,setUser]=useState({});
    const auth = getAuth();
    // Google Sign In Here
    const signInUsingGoogle=()=>{
        const googleProvider= new GoogleAuthProvider();
        signInWithPopup(auth, googleProvider)
        .then(result=>{
            setUser(result.user);
            console.log(result.user);
        });
    }
    // observe user state change
    useEffect(()=>{
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
              setUser(user);
            } else {
                setUser({});
            }
          });
          return () => unsubscribed;
    },[])
    // Logout  Here
    const logOut =()=>{
            signOut(auth)
            .then(()=>{
            });
    }

    // const signInUsingFacebook=()=>{
        
    // }

    return{
        user,
        signInUsingGoogle,
        logOut
    }
        
    
}
export default useFirebase;