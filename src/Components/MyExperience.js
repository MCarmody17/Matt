import React from "react";
import "../styles/Experience.css";
import ExperienceCard from "./ExperienceCard";

class Experience extends React.Component {
    render() {
        return (
            <div id="experience" className="experience-section">
                <div className="section-header">
                    <span className="section-title">/ experience</span>
                </div>
                <div className="experience-content">
                    <ExperienceCard
                        title="Cloud Software Engineer - Ericsson"
                        dates="March 2023 - Current"
                        description="Developed and maintained complex software solutions using Python, C++, and various frameworks. Collaborated with cross-functional teams to ensure codebase integrity and enhance company operations."
                        className="card-mars"
                        techstack={["cplusplus", "c", "python", "jenkins", "kubernetes", "git", "java", "docker", "bash"]}
                    />
                    <ExperienceCard
                        title="Research Assistant - QUT"
                        dates="November 2023 - February 2024"
                        description="Contributed to the 5G and IoT smart ontology learning project. Engaged in code reviews, program design, and implementation using Python, ML, and AI."
                        className="card-moon"
                        techstack={["python", "pytorch", "numpy", "pandas", "scrapy", "nltk", "jupyter", "git"]}
                    />
                    <ExperienceCard
                        title="Research Assistant - UQ"
                        dates="June 2022 - September 2022"
                        description="Developed a chatbot using machine learning, neural networks, and NLP to assist the deaf community. Collaborated with academic professionals on research projects."
                        className="card-sun"
                        techstack={["python", "cplusplus", "nltk", "jupyter", "git"]}
                    />
                </div>
            </div>
        );
    }
}

export default Experience;
