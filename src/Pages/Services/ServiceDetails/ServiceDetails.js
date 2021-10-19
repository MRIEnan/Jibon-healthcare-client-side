import React from 'react';
import './ServiceDetails.css';
import { useState, useEffect } from 'react';
import {useParams} from 'react-router-dom';
import {NavLink} from 'react-router-dom';
import Icofont from 'react-icofont';
import useAuth from '../../../hooks/useAuth';

const ServiceDetails = ({children}) => {
    const {hid,isLogin,} = useAuth();
    const {slug} = useParams();
    const [singleService,setSingleService] = useState({});
    useEffect(()=>{
        fetch('/serviceData.json')
        .then(res => res.json())
        .then(data => {
            data.find(item => {
                if(item.Hid === parseInt(hid)){
                    setSingleService(item);
                }
            })
        })
    },[singleService]);

    return (
        <div className="single-service-details-container">
            <div id="top" className="single-service-title-container">
                <div className="single-service-title-container-icon">
                    <Icofont icon={singleService?.icoName} size="10"/>
                </div>
                <h2>{singleService?.serviceName}</h2>
                <h5>{singleService?.serviceTitle}</h5>
                <h5>{slug}</h5>
            </div>
            <div className="single-service-description">
                <p>{singleService.shortDescription}</p>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus eligendi, impedit libero illo quidem iure adipisci rem totam odio quos praesentium vel eum. Voluptate numquam nulla reprehenderit a ratione. Exercitationem similique impedit voluptate deserunt vitae, placeat dicta vel fuga. Natus magni, adipisci deleniti veritatis saepe culpa iste inventore, deserunt rerum atque reiciendis libero aliquid sit vero, impedit cupiditate rem qui!</p>
            </div>
            <NavLink to='/appoinment'><button className="btn-regular">Get Appointment</button></NavLink>
            <br/>
            <hr />
            <NavLink  to='/services'><button className="btn-regular">Services</button></NavLink>
        </div>
    );
};

export default ServiceDetails;