import React from 'react';
import './Navbar.css';
import jibonLogo from '../../../images/jibon-logo.jpg';
import useAuth from '../../../hooks/useAuth';
import Icofont from 'react-icofont';
import { NavHashLink } from 'react-router-hash-link';

const Navbar = () => {
    const {user,logOut} = useAuth();
    return (
        <div>
            <div>
                {user.email && <div style={{textAlign:'center'}}><small>{user.displayName}</small></div>}
                <div className="top-nav-all-icon-container">
                    <div className="top-nav-icon-container">
                        <Icofont icon="phone"/>
                        <p>Call : +017 123 654321</p>
                    </div>
                    <div className="top-nav-icon-container">
                        <Icofont icon="email"/>
                        <p>shastho.jibon@somemail.com</p>
                    </div>
                    <div className="top-nav-icon-container">
                        <Icofont icon="location-pin"/>
                        <p>448 Feni, Bangladesh</p>
                    </div>
                </div>
                <hr/>
                <div className="navbar-container">
                    <div className="nav-logo-container">
                        <img src={jibonLogo} alt="" />
                    </div>
                    <div className="nav-all-item-container">
                        <div className="nav-item-box">
                            <NavHashLink to="/home#home-top">Home</NavHashLink>
                        </div>
                        <div className="nav-item-box">
                            <NavHashLink to="/about#top">About</NavHashLink>
                        </div>
                        <div className="nav-item-box">
                            <NavHashLink to="/services#top">Services</NavHashLink>
                        </div>
                        {user.email && <div className="nav-item-box">
                            <NavHashLink to="/appoinment#top">Appoinment</NavHashLink>
                        </div>}
                        {!user.email?<div className="nav-item-box">
                            <NavHashLink to="/login#top">Log in</NavHashLink>
                        </div>: <button onClick={logOut} className="btn-log-out">Log out</button>}
                        {user.email && <img style={{textAlign:'center',width:'40px',height:'40px'}} src={user?.photoURL} alt="img" title={user.displayName} /> }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;