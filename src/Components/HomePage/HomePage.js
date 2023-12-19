import React from "react";
import "./HomePage.css";
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { useTypewriter } from "react-simple-typewriter";
export default function HomePage() {
  const [text] = useTypewriter({
    words: ["Passionate about changing the world with technology."],
    loop: 1,
    typeSpeed: 100,
    deleteSpeed: 0,
  });

  return (
    <>
      <div className="home-page">
        <div className="container-home">
          <h1 className="name">Abhishek Singh</h1>
          <h5 className="content">{text}</h5>
          <div className="social-media">
            <a href="https://github.com/Abhi-ansh-singh" target="_blank">
              <GitHubIcon sx={{ fontSize: "50px" }} />
            </a>
            <a
              href="https://twitter.com/Abhianshu98"
              target="_blank"
            >
              <TwitterIcon sx={{ fontSize: "50px" }} />
            </a>
            <a
              href="/"
              target="_blank"
            >
              <InstagramIcon sx={{ fontSize: "50px" }} />
            </a>
            <a
              href="https://www.linkedin.com/in/abhishek-singh-7a9059154"
              target="_blank"
            >
              <LinkedInIcon sx={{ fontSize: "50px" }} />
            </a>
          </div>
          <div className="button">
            <button className="about-me-btn">
              <a href="#About">More about me</a>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
