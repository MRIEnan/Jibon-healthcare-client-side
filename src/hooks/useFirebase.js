import {getAuth, signInWithPopup, GoogleAuthProvider, signOut , onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile} from "firebase/auth";
import initializeAuthentication from '../firebase/firebase.init';
import { useEffect, useState } from 'react';

const useFirebase = () => {
    initializeAuthentication()

    const [hid,setHid]= useState('');
    const [user,setUser] = useState({});
    const [isLoading, setIsLoading]  = useState(true);
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [name,setName] = useState('display name');
    const [err,setErr] = useState('');
    
    const auth = getAuth();


    const setUserName = ()=>{
        updateProfile(auth.currentUser, {displayName: name})
        .then(() => {console.log('updated',user.user)})
        .catch((error) => setErr(error.message));
    }
    const setPhotoUrl = ()=>{
        updateProfile(auth.currentUser, {photoURL: "https://www.kindpng.com/picc/m/78-785827_user-profile-avatar-login-account-male-user-icon.png"})
        .then(() => {console.log('updated photo')})
        .catch((error) => setErr(error.message));
    }

    // get email
    const handleEmailChange = e =>{
        setEmail(e.target.value);
    }
    // get pass
    const handlePasswordChange = e =>{
        setPassword(e.target.value);
    }
    // get name
    const handleNameChange = e =>{
        setName(e.target.value);
    }

    
    // sign up with password
    const signUpUsingPassword = () => {
        setIsLoading(true);
        return createUserWithEmailAndPassword(auth,email,password)
    }

    // log in with password
    const logInUsingPassword = () => {
        setIsLoading(true);
        return signInWithEmailAndPassword(auth,email,password)
    }
    
    // sign in  with google
    const signInUsingGoogle = () => {
        setIsLoading(true);
        const googleProvider = new GoogleAuthProvider();
        return signInWithPopup(auth,googleProvider)
    };

    // observer means observer user state changed of not 
    useEffect(()=>
    {
        const unSubscribe = onAuthStateChanged(auth,(user) =>{
            if(user){
                setUser(user);
            }
            else{
                setUser({});
            }
            setIsLoading(false);
        })
        return () =>  unSubscribe;
    },[isLoading]);


    // sign Out
    const logOut = () =>{
        setIsLoading(true)
        signOut(auth)
        .then(()=>{
            setUser({})
        })
        .finally(() => setIsLoading(false))
    }
    

    return {user,auth, signInUsingGoogle,name, isLoading, setIsLoading, logOut,hid,setHid,setName,setPassword,setEmail,signUpUsingPassword,logInUsingPassword,err,setErr,setUserName,handleEmailChange,handlePasswordChange,handleNameChange,setPhotoUrl}

}

export default useFirebase;