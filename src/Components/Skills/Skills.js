import React, { useState } from "react";
import "../Skills/Skills.css";
import ProgressBar from "@ramonak/react-progress-bar";

export default function Skills() {
  const [displayTechnicalSkills, setDisplayTechnicalSkills] = useState(true);


  return (
    <div className="skill-container" id="Skills">
      <div className="title">
        <h1>Skills</h1>
      </div>
      <div className="progress-container">
        <div>
          <div className="progress-slot-btn">
            <span
              onClick={() => setDisplayTechnicalSkills(true)}
              className="sub-title"
            >
              Technical Skills
            </span>
            <span
              onClick={() => setDisplayTechnicalSkills(false)}
              className="sub-title"
            >
              Soft Skills
            </span>
          </div>
          <div style={{padding:"10px", minWidth:"350px",textAlign:"center"}}>
            {displayTechnicalSkills ? (
              <div className="skills-items">
                <div className="skill-info">
                  <p>React</p>
                  <ProgressBar
                    completed="60"
                    bgColor="#0d6efd"
                    height="10px"
                    labelColor="transparent"
                    animateOnRender={true}
                  />
                </div>
                <div className="skill-info">
                  <p>Java Script</p>
                  <ProgressBar
                    completed="80"
                    bgColor="#0d6efd"
                    height="10px"
                    labelColor="transparent"
                    animateOnRender={true}
                  />
                </div>
                <div className="skill-info">
                  <p>Data Structures</p>
                  <ProgressBar
                    completed="55"
                    bgColor="#0d6efd"
                    height="10px"
                    labelColor="transparent"
                    animateOnRender={true}
                  />
                </div>
                <div className="skill-info">
                  <p>HTML/CSS</p>
                  <ProgressBar
                    completed="75"
                    bgColor="#0d6efd"
                    height="10px"
                    labelColor="transparent"
                    animateOnRender={true}
                  />
                </div>
                <div className="skill-info">
                  <p>Bootstrap</p>
                  <ProgressBar
                    completed="70"
                    bgColor="#0d6efd"
                    height="10px"
                    labelColor="transparent"
                    animateOnRender={true}
                  />
                </div>
                <div className="skill-info">
                  <p>Material UI</p>
                  <ProgressBar
                    completed="65"
                    bgColor="#0d6efd"
                    height="10px"
                    labelColor="transparent"
                    animateOnRender={true}
                  />
                </div>
              </div>
            ) : (
              <div className="skills-items">
                <div className="skill-info">
                  <p>Result Oriented</p>
                  <ProgressBar
                    completed="70"
                    bgColor="#0d6efd"
                    height="10px"
                    labelColor="transparent"
                    animateOnRender={true}
                  />
                </div>
                <div className="skill-info">
                  <p>Communications</p>
                  <ProgressBar
                    completed="75"
                    bgColor="#0d6efd"
                    height="10px"
                    labelColor="transparent"
                    animateOnRender={true}
                  />
                </div>
                <div className="skill-info">
                  <p>Leadership</p>
                  <ProgressBar
                    completed="80"
                    bgColor="#0d6efd"
                    height="10px"
                    labelColor="transparent"
                    animateOnRender={true}
                  />
                </div>
                <div className="skill-info">
                  <p>Adaptability</p>
                  <ProgressBar
                    completed="85"
                    bgColor="#0d6efd"
                    height="10px"
                    labelColor="transparent"
                    animateOnRender={true}
                  />
                </div>
                <div className="skill-info">
                  <p>Collaboration</p>
                  <ProgressBar
                    completed="70"
                    bgColor="#0d6efd"
                    height="10px"
                    labelColor="transparent"
                    animateOnRender={true}
                  />
                </div>
                <div className="skill-info">
                  <p>Creativity</p>
                  <ProgressBar
                    completed="65"
                    bgColor="#0d6efd"
                    height="10px"
                    labelColor="transparent"
                    animateOnRender={true}
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
