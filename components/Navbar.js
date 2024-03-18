import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import styles from "../styles/Navbar.module.scss";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("presentation");
  const [active, setActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        const scrollPosition = window.scrollY;

        if (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionTop + sectionHeight
        ) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const setActiveStyle = (sectionId) => {
    return sectionId === activeSection ? { color: "#ff4900" } : {};
  };

  const openNavbar = active
    ? `${styles.content} ${styles.active}`
    : `${styles.content}`;

  const handleClick = () => {
    console.log("click");
    setActive(!active);
  };

  return (
    <nav className={styles.container}>
      <div className={styles.container__link}>
        <a href="#presentation">
          <img src="logo.png" alt="logo" className={styles.logo} />
        </a>

        <ul className={openNavbar}>
          <li>
            <a
              href="#presentation"
              className={styles.link}
              style={setActiveStyle("presentation")}
            >
              présentation
            </a>
          </li>
          <li>
            <a
              href="#project"
              className={styles.link}
              style={setActiveStyle("project")}
            >
              projets
            </a>
          </li>
          <li>
            <a
              href="#experiences"
              className={styles.link}
              style={setActiveStyle("experiences")}
            >
              experiences
            </a>
          </li>
          <li>
            <a
              href="#skills"
              className={styles.link}
              style={setActiveStyle("skills")}
            >
              skills
            </a>
          </li>
        </ul>
        <FontAwesomeIcon
          icon={faBars}
          className={styles.faBars}
          onClick={handleClick}
        />
      </div>
      <div className={styles.line}></div>
    </nav>
  );
};

export default Navbar;
