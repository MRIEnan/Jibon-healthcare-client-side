import React from 'react';
import './Footer.css';
import {NavLink} from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Footer = () => {
    const {user} = useAuth();
    return (
        <div className="footer-container">
            <div className="contact-us-section">
                <h1>Contact Us</h1>
                <p>Email   : shatho.jibon@somemail.com</p>
                <p>Call    : +017 012 78921</p>
                <p>Address : 448 Feni, Bangladesh.</p>
            </div>
            <div className="quick-links-section">
                <h1>Quick Links</h1>
                <NavLink to="/home">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/services">Services</NavLink>
                {user.email && <NavLink to="/appoinment">Appointment</NavLink>}
                {!user.email && <NavLink to="/login">Log in</NavLink>}
            </div>
            <div className="feedback-section">
                <h1>Feedback</h1>
                <div className="feedback-form">
                    <input type="text" name="" id="" placeholder="Name"/>
                    <hr />
                    <input type="number" name="" id="" placeholder="Phone" />
                    <hr />
                    <textarea name="" id="" cols="30" placeholder="Message" rows="10"></textarea>
                    <hr />
                    <button type="submit">Submit</button>
                </div>
            </div>
        </div>
    );
};

export default Footer;