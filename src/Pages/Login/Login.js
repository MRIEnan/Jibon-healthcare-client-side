import React from 'react';
import './Login.css';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import Icofont from 'react-icofont';
import useAuth from '../../hooks/useAuth';

const Login = () => {
    const {signInUsingGoogle,setIsLoading,setErr,logInUsingPassword,handleEmailChange,err,handlePasswordChange} = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home';

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

    // email and password log in
    const handleEmailPasswordLogIn = e =>{
        e.preventDefault();
        logInUsingPassword()
        .then(result => {
            const user = result.user;
            console.log(user);
            history.push(redirect_uri);
            setErr('');
        })
        .catch(error => {
            if(error.code === 'auth/wrong-password'){
                setErr('You have entered wrong password.');
            }
            if(error.message === 'Firebase: Error (auth/user-not-found).'){
                setErr('You have registered yet.');
            }
            else{
                setErr(error.message);
            }
        })
        .finally(()=>setIsLoading(false))
    }

    return (
        <div className="login-container">
            <h2>Login</h2>
            <form onSubmit={handleEmailPasswordLogIn}>
                <input onChange={handleEmailChange} type="email" name="" id="" placeholder="Please enter your email"/>
                <br/>
                <input onChange={handlePasswordChange} type="password" name="" id="" placeholder="Please enter your password"/>
                <br/>
                <button className="btn-regular" type="submit">Log in</button>
            </form>
            {<h5>{err}</h5>}
            <p>You have no Account? <NavLink className='btn-regular' style={{textDecoration:'none'}} to="/signup">sign up</NavLink></p>
            <hr style={{width: '250px'}}/>
            <p style={{margin: "10px 0 20px 0"}}>Log in with</p>
            <Icofont onClick={handleGoogleSignIn} className='btn-regular'  icon="brand-google" size="3"/>
        </div>
    );
};
export default Login;