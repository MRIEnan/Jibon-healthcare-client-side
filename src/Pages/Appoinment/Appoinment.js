import React from 'react';
import './Appoinment.css';
import Icofont from 'react-icofont';

const Appoinment = () => {
    return (
        <div>
            <div className="services-container-top">
                <div>
                    <h1>Appointment</h1>
                    <h3>Take your appointment smoothly.</h3>
                </div>
            </div>
            <div className="appoinment-section-container">
                <div className="appoinment-form">
                    <h2>Book your appoinment</h2>
                    <p>We will confirm your appointment</p>
                    <div className="appoinment-inner-form">
                        <input type="text" name="" id="" placeholder="Enter Your Name" />
                        <br />
                        <input type="email" name="" id="" placeholder="Enter Your Email" />
                        <br />
                        <input type="number" name="" id="" placeholder="Enter Your Number" />
                        <br />
                        <input type="text" name="" id="" placeholder="Enter Your Service" />
                        <br />
                        <input type="text" name="" id="" placeholder="Enter Doctor Name"/>
                        <br/>
                        <input type="number" name="" id="" placeholder="Your Age" />
                    </div>
                    <br/>
                    <button className="btn-regular">Submit</button>
                </div>
                <div className="appoinment-schedule">
                    <div>
                        <h3>Working Hours</h3>
                        <div>
                            <table>
                                <tr>
                                    <td>Monday</td>
                                    <td>9:00 AM - 8:00 PM</td>
                                </tr>
                                <tr>
                                    <td>Tuesday</td>
                                    <td>9:00 AM - 8:00 PM</td>
                                </tr>
                                <tr>
                                    <td>Wednesday</td>
                                    <td>9:00 AM - 8:00 PM</td>
                                </tr>
                                <tr>
                                    <td>Thursday</td>
                                    <td>9:00 AM - 8:00 PM</td>
                                </tr>
                                <tr>
                                    <td>Friday</td>
                                    <td>9:00 AM - 8:00 PM</td>
                                </tr>
                                <tr>
                                    <td>Saturday</td>
                                    <td>9:00 AM - 8:00 PM</td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Appoinment;