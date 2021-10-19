import React from 'react';
import './ServiceCard.css';
import Icofont from 'react-icofont';
import { NavLink } from 'react-router-dom';

const ServiceCard = (props) => {
    const {Hid,icoName,serviceName,shortDescription} = props.service;
    const slug = `/service/${Hid}`;
    return (
        <div className="service-card">
            <div className="service-card-image-container">
                <Icofont icon={icoName} size="5"/>
            </div>
            <h2>{serviceName}</h2>
            <p>{shortDescription}...</p>
            <NavLink to={slug}><button className="service-card-button">Details</button></NavLink>
        </div>
    );
};

export default ServiceCard;