import React from "react";
import Logo from "../Assets/Logo.png";
import { BsTwitter, BsYoutube } from "react-icons/bs";
import { SiLinkedin } from "react-icons/si";
import { FaFacebook } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="footer-wrapper">
            <div className="footer-section-one">
                <div className="footer-logo-container">
                    <img src={Logo} alt="Logo" />
                </div>
                <div className="footer-icons">
                    <BsTwitter />
                    <BsYoutube />
                    <SiLinkedin />
                    <FaFacebook />
                </div>
            </div>
            <div className="footer-section-two">
                <div className="footer-section-columns">
                    <span>Quality</span>
                    <span>Help</span>
                    <span>Share</span>
                    <span>Carrers</span>
                    <span>Testimonials</span>
                    <span>About</span>
                </div>
                <div className="footer-section-columns">
                    <span>+91 6485163849</span>
                    <span>hello@craveyfusion.com</span>
                    <span>press@craveyfusion.com</span>
                    <span>contact@craveyfusion.com</span>
                </div>
                <div className="footer-section-columns">
                    <span>Terms & Conditions</span>
                    <span>Privacy Policy</span>
                </div>
            </div>
        </div>
    )
}

export default Footer;