import React, { useState, useEffect } from "react";
import "./Header.css";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { IconButton } from "@mui/material";

export default function Header() {
  const navItems = ["Projects", "About", "Skills"];
  const [clicked, setClicked] = useState(false);
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);

    return () => {
      window.removeEventListener("scroll", changeBackground);
    };
  }, []);

  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <>
      <nav className={navbar ? "navbar active " : "navbar"}>
        <div className="logo">
          <a href="/" style={{textDecoration:"none"}}>
          <span className="logo-style">My</span>
          <span className="logo-style2">_Portfolio</span>
          </a>
        </div>
        <div className="nav-item">
        <ul className={clicked ? "nav-menu active" : "nav-menu"}>
          {navItems.map((item) => (
            <li key={item}>
              <a className="navLink" href={`#${item}`}>
                {item}
              </a>
            </li>
          ))}
        </ul>
        <div className="menu-icon" onClick={handleClick}>
          <IconButton>
            {clicked ? <CloseIcon />:<MenuIcon />}
          </IconButton>
        </div>
        </div>
      </nav>
    </>
  );
}
