import React from 'react';
import './About.css';
import doctorImage from '../../images/smiling-touching-arms-crossed-room-hospital.jpg';

const About = () => {
    return (
        <div>
            <div className="services-container-top">
                <div>
                    <h1>About</h1>
                    <h3>Responsibilty is only preference.</h3>
                </div>
            </div>
            <div className="about-section-container">
                <div className="about-section-image-container">
                    <img src={doctorImage} alt="" />
                </div>
                <div className="about-section-info-container">
                    <h2>About Our Hospital</h2>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque magni vel unde dicta, repellendus non architecto labore nulla voluptatem laudantium incidunt perferendis voluptates eos. Sint perspiciatis dolorem, tempore id quisquam beatae inventore iste asperiores totam ea soluta voluptatum quam? Nesciunt.</p>
                    <ul>
                        <li>Browse Our Website</li>
                        <li>Choose Service</li>
                        <li>Send Message</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default About;