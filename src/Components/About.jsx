import React from "react";
import AboutBackground from "../Assets/about-background.png";
import AboutBackgroundImage from "../Assets/about-background-image.png";
import { BsFillPlayCircleFill } from "react-icons/bs";

const About = () => {
    return (
        <div className="about-section-container" id="about">
            <div className="about-background-image-container">
                <img src={AboutBackground} alt="Background" />
            </div>
            <div className="abount-section-image-container">
                <img src={AboutBackgroundImage} alt="About" />
            </div>
            <div className="about-section-text-container">
                <p className="primary-subheading">About</p>
                <h1 className="primary-heading">
                    Food is an Important Part of a Balanced Diet
                </h1>
                <p className="primary-text">
                    Food is an essential component of maintaining a balanced diet, providing our bodies with vital nutrients and energy. A diverse selection of foods ensures we receive a variety of vitamins and minerals necessary for overall health.
                </p>
                <div className="about-buttons-container">
                    <button className="secondary-button">Learn More</button>
                    <button className="watch-video-button">
                        <BsFillPlayCircleFill /> Watch Video 
                    </button>
                </div>
            </div>
            
        </div>

    )
}

export default About;