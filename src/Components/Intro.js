import React from "react";

import "../styles/intro.css";


export default function Intro() {
    return (
        <div className="intro">
            <div className="intro-title">
                <h1>Hey, I'm <span className="intro-name"> Matt.</span> </h1> 
            </div>
            
            <div className="intro-desc">
                I'm a Cloud Software Engineer at Ericsson currently based in Budapest,<br></br>
                and a student at Queenslands University of Technology in my final year.<br></br>
                I'm interested in AI, Full stack Development and Data Science.  
            </div>
        </div>
    );
}

