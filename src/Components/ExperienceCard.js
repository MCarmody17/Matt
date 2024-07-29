import React from "react";
import "../styles/ExperienceCard.css";

const ExperienceCard = ({ title, dates, description, className, techstack, link }) => {
    return (
        <div className={`experience-card ${className}`}>
            <a href={link} className="experience-title-link" target="_blank" rel="noopener noreferrer">
                <h3>{title}</h3>
                
            </a>
            <h5 className="experience-dates">{dates}</h5>
            <p>{description}</p>
            <div className="tech-stack">
                {techstack.map((iconClass, index) => (
                    <i key={index} className={`devicon-${iconClass}-plain`}></i>
                ))}
            </div>
        </div>
    );
};

export default ExperienceCard;