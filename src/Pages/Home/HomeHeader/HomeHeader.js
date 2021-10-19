import React from 'react';
import './HomeHeader.css';
import { NavLink } from 'react-router-dom';


const HomeHeader = () => {
    return (
        <>
        <div className="home-header-container">
            <div id="home-top" className="home-header-left-container">
                <div className="home-header-left">
                    <h1>We Have Fantastic Experts Doctors.</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit praesentium voluptates at, consectetur eos aliquid perferendis recusandae, sequi reiciendis suscipit soluta saepe est consequuntur odio assumenda voluptate! Dolorem, praesentium? Quod.</p>
                    <div className="home-header-left-btn-container">
                        <NavLink to='/appoinment'>Get Appointment</NavLink>
                        <NavLink to='/'>Learn More</NavLink>
                    </div>
                </div>
            </div>
        </div>
            <div className="header-bottom-container">
                <div className="header-bottom-detail-info">
                    <div className="header-bottom-container-icon">
                        <i className="icofont-phone"></i>
                    </div>
                    <div className="header-bottom-container-info">
                        <h1>Emergency Call</h1>
                        <p>Call : +017 123 654321</p>
                        <p>Call : +017 456 654221</p>
                    </div>
                </div>
                <div className="header-bottom-detail-info">
                    <div className="header-bottom-container-icon">
                    <i class="icofont-location-pin"></i>
                    </div>
                    <div className="header-bottom-container-info">
                        <h1>Location</h1>
                        <p>448 Feni, Bangladesh</p>
                    </div>
                </div>
                <div className="header-bottom-detail-info">
                    <div className="header-bottom-container-icon">
                    <i class="icofont-ambulance-cross"></i>
                    </div>
                    <div className="header-bottom-container-info">
                        <h1>Ambulance</h1>
                        <p>Call : +017 123 654321</p>
                        <p>Call : +017 456 654221</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HomeHeader;