import React from 'react';
import Icofont from 'react-icofont';
import {NavLink, useHistory, useLocation} from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import { NavHashLink } from 'react-router-hash-link';

const Signup = () => {
    const {name,email,setName,setEmail,setPassword,password,setUser,user,signInUsingGoogle,setIsLoading,signUpUsingPassword,setErr,setUserName,handleEmailChange,handlePasswordChange,handleNameChange,setPhotoUrl} = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home';

    /* // get email
    const handleEmailChange = e =>{
        console.log(e.target.value);
        setEmail(e.target.value);
    }
    // get pass
    const handlePasswordChange = e =>{
        console.log(e.target.value);
        setPassword(e.target.value);
    }
    // get name
    const handleNameChange = e =>{
        console.log(e.target.value);
        setName(e.target.value);
    } */

    // google sign in
    const handleGoogleSignIn = () => {
        signInUsingGoogle()
        .then(result =>{
            history.push(redirect_uri)
        })
        .catch(error => {
            console.log(error.message)
        })
        .finally(()=>setIsLoading(false))
    }

    //email password sign up
    const handlePasswordSignUp= e =>{
        e.preventDefault();
        console.log(name,email,password)
        signUpUsingPassword()
        .then((userCredential) => {
            history.push(redirect_uri)
            setErr('');
        })
        .catch(error => setErr(error.message))
        .finally(()=>{
            setUserName();
            setPhotoUrl();
            setIsLoading(false)
        });

    }

    return (
        <div className="login-container">
            <h2 id="top">Sign up</h2>
            <form onSubmit={handlePasswordSignUp}>
                <input onChange={handleNameChange} type="text" name="" id="" placeholder="enter your name"/>
                <br/>
                <input onChange={handleEmailChange} type="email" name="" id="" placeholder="Please enter your email"/>
                <br/>
                <input onChange={handlePasswordChange} type="password" name="" id="" placeholder="Please enter your password"/>
                <br/>
                <button className="btn-regular" type="submit">Sign up</button>
            </form>
            <br/>
            <p>Already have an account? <NavHashLink className='btn-regular' style={{textDecoration:'none'}} to="/login">Log in</NavHashLink></p>
            <hr style={{width: '250px'}}/>
            <p style={{margin: "10px 0 20px 0"}}>Log in with</p>
            <Icofont className='btn-regular' onClick={handleGoogleSignIn}  icon="brand-google" size="3"/>
        </div>
    );
};

export default Signup;


