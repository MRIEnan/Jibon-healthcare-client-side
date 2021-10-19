import React from 'react';
import './ServicesContainer.css';
import Services from '../../Shared/Services/Services';

const ServicesContainer = () => {
    return (
        <div>
            <div className="services-container-top">
                <div>
                    <h1>All Services</h1>
                    <h3>One step to get your service</h3>
                </div>
            </div>
            <Services></Services>
        </div>
    );
};

export default ServicesContainer;