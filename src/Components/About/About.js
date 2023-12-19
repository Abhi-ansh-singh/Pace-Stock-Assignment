import React from "react";
import "./About.css";
import Profile from "../../assets/Profile_pic.png"
export default function About() {
  return (
    <div className="about-me" id="About">
      <div className="my-img">
        <img src= {Profile}alt="Profile Picture" height={"400px"} width={"400px"}style={{borderRadius:"50%"}}></img>
      </div>
      <div className="container">
      <h1 className="title-about">About Me</h1><br/>
      <div className="details-about">
      <p>
        My name is Abhishek Singh. I’m a graduate of 2022 from Sri Satya Sai
        University Of Technology And Medical Sciences with a degree in BE
        Electrical Engineering. I'm most passionate about giving back to the
        community, and my goal is to pursue this passion within the field of
        software engineering. In my free time I like working on open source
        projects.
      </p>
      </div>
      <div className="resume-btn"><button className="resume">Resume</button></div>
      </div>
    </div>
  );
}
