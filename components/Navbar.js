import React, { useState, useEffect } from "react";
import styles from "../styles/Navbar.module.scss";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("presentation");

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

  return (
    <nav className={styles.container}>
      <div className={styles.container__link}>
        <a href="#presentation">
          <img src="logo.png" alt="logo" className={styles.logo} />
        </a>
        <ul className={styles.content}>
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
      </div>
      <div className={styles.line}></div>
    </nav>
  );
};

export default Navbar;
