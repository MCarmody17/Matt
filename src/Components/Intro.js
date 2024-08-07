import React from "react";
import "../styles/intro.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

export default function Intro() {
    return (
        <div className="intro">
            <div className="intro-subtitle">
                <h1>Hey, I'm <span className="intro-name"> Matt.</span> </h1> 
            </div>
            
            <div className="intro-desc">
                I'm a Software Engineer from Brisbane, Australia,<br></br>
                I'm super interested in Quantitative coding, Machine Learning, Data,  
                Security, Cloud and DevOps. I have also worked as a ML Research Assistant for Universities. 
            </div>
            <a
            href="mailto:Matthewcarmody17@gmail.com"
            className="intro-contact"
          >
            
            <FontAwesomeIcon icon={faEnvelope} /> {" Email me!"}
          </a>
        </div>
    );
}

