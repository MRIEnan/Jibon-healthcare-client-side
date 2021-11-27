import React from 'react';
import './Services.css';
import { useEffect } from 'react';
import { useState } from 'react';
import ServiceCard from '../ServiceCard/ServiceCard';
// import useServices from '../../../hooks/useServices';

const Services = () => {
    const [services,setServices] = useState([]);
    useEffect(()=>{
        fetch('https://whispering-oasis-97191.herokuapp.com/services')
        .then(res => res.json())
        .then(data => {
            setServices(data);
        });
    },[]);
    // const {services} = useServices();
    return (
        <div id="top" className="services-container">
            <h2 className="services-container-title">Services</h2>
            <div className="services-container-card">
                {services.map(service => <ServiceCard key={service.Hid} service={service}></ServiceCard>)}
            </div>
        </div>
    );
};

export default Services;