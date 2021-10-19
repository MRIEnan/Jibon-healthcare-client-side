import React from 'react';
import './ServiceCard.css';
import { NavHashLink } from 'react-router-hash-link';
import Icofont from 'react-icofont';

const ServiceCard = (props) => {
    const {Hid,icoName,serviceName,shortDescription} = props.service;
    const slug = `/service/${Hid}#top`;
    return (
        <div className="service-card">
            <div className="service-card-image-container">
                <Icofont icon={icoName} size="5"/>
            </div>
            <h2>{serviceName}</h2>
            <p>{shortDescription}...</p>
            <NavHashLink to={slug}><button className="service-card-button">Details</button></NavHashLink>
        </div>
    );
};

export default ServiceCard;