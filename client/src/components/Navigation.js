import React, { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  const [scrolled, setscrolled] = useState(false);
  const navRef = useRef();

  useEffect(() => {
    const handleScroll = () => {
      if (
        document.body.scrollTop >= 100 ||
        document.documentElement.scrollTop >= 100
      ) {
        navRef.current.classList.add("nav-active");

        if (!scrolled) {
          navRef.current.style.transform = "translateY(-70px)";
        }

        setTimeout(function () {
          navRef.current.style.transform = "translateY(0px)";
          setscrolled(true);
        }, 110);
      } else {
        navRef.current.classList.remove("nav-active");
        setscrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled, setscrolled]);
  return (
    <div className="fixed" ref={navRef}>
      <div className="nav">
        <div className="logo">
          <h1>khagu-dev</h1>
        </div>
        <nav>
          <input type="checkbox" id="checkbox_hamburger" />
          <label className="hamburger" htmlFor="checkbox_hamburger">
            <p className="code_hamburger">&#9776;</p>
            <p className="code_cross">&#10539;</p>
          </label>
          <ul>
            <NavLink to="/">
              <li>Accueil</li>
            </NavLink>
            <NavLink to="/cv">
              <li>CV</li>
            </NavLink>
            <NavLink to="/portfolio">
              <li>Portfolio</li>
            </NavLink>
            <NavLink to="/contact">
              <li>Contact</li>
            </NavLink>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navigation;
