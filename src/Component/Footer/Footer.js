import React from 'react';
import './Footer.css'
import icon from '../../Images/facebook-icon-png.jpg'
import icon2 from '../../Images/whats-app-icon (1).jpg'

const Footer = () => {


    return (
        <div className="footer">
            <div className="">
                <h4><u>Contact US</u></h4>
                <h6>Email:NutritonCare@gmail.com</h6>
                <h6>Location:1420 Seargants Road
                    South Carlton
                    Victoria 3433</h6>
                <h6>Mobile:01446458</h6>
                <img className="icon" src={icon} alt="" />
                <img className="icon" src={icon2} alt="" />
            </div>
        </div>
    );
};

export default Footer;