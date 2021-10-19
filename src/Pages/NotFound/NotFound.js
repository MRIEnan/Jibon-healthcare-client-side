import React from 'react';
import './NotFound.css';
import Icofont from 'react-icofont';
import { NavLink } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="not-found-container">
            <div>
                <Icofont icon="sad" size="7"/>
                <h2>Sorry, we couldn't find the page you're looking for.</h2>
                <p>Let's go to <NavLink className="btn-regular" to="/home">Home</NavLink> </p>
            </div>
        </div>
    );
};

export default NotFound;