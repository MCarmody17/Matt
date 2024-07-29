import React from "react";

import "../styles/about.css";


class About extends React.Component {
    constructor() {
      super();
      this.state = {
        expanded: true,
        activeKey: "1"
      };
      this.handleSelect = this.handleSelect.bind(this);
    }
    handleSelect(eventKey) {
      this.setState({
        activeKey: eventKey
      });
    }
    render() {
      const one = (
        <p>
          I am currently a <b>Cloud Software Engineer</b> at
        <a href="https://www.ericsson.com/en"> Ericsson</a>, working in the IMS Gateays
         sector. I have previously worked as a <b>Research Assistant</b> at 
         <a href="https://www.qut.edu.au/"> Queensland University of Technology</a>.
        </p>
      );
      const two = (
        <p>
            <br></br>
          Outside of work, I like to stay active with powerlifting, hiking and boxing. 
          I also like to play video games, read and keeping up with developments in neuroscience, AI and Finance.
        </p>
      );

  
      return (
        <div id="about">
            <div className="section-header ">
              <span className="section-title">/ about me</span>
            </div>
            <div className="about-content">
              <div className="about-description">
                {[one]}
                {"Here are some technologies I have been working with: \n"}
                <br></br>
                <br></br>
                <i class="devicon-c-line"></i>
                <i class="devicon-cplusplus-plain"></i>
                <i class="devicon-kubernetes-plain-wordmark"></i>
                <i class="devicon-java-plain-wordmark"></i>
                <i class="devicon-git-plain-wordmark"></i>
                <i class="devicon-jenkins-plain"></i>
                <i class="devicon-react-original-wordmark"></i>
                <i class="devicon-kubernetes-plain-wordmark"></i>
                <i class="devicon-powershell-plain"></i>
                <i class="devicon-react-original-wordmark"></i>
                <i class="devicon-nodejs-plain-wordmark"></i>
                <i class="devicon-python-plain"></i>
                
                <i class="devicon-javascript-plain"></i>
          
                
                {[two]}
              </div>
              <div className="about-image">
                <img alt="Matt" src={"/assets/me.jpg"} />
              </div>
            </div>
        </div>
      );
    }
  }
  
  export default About;