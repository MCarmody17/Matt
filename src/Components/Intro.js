import React from "react";
import "../styles/intro.css";

export default function Intro() {
    return (
        <div className="intro">
            <div className="intro-subtitle">
                <h1>Hey, I'm <span className="intro-name"> Matt.</span> </h1> 
            </div>
            
            <div className="intro-desc">
                I'm a Software Engineer from Brisbane, Australia,<br></br>
                I'm super interested in Quantitative coding, Full Stack Development, Data,  <br></br>
                Security, Cloud and DevOps and I have worked as a Research Assistant for Universities. 
            </div>
            <a
            href="mailto:Matthewcarmody17@gmail.com"
            className="intro-contact"
          >
            
            {" Email me!"}
          </a>
        </div>
    );
}

