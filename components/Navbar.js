import React from "react";
import styles from "../styles/Navbar.module.scss";

const Navbar = () => {
  return (
    <nav className={styles.container}>
      <div className={styles.container__link}>
        <a href="#presentation">
          <img src="logo.png" alt="logo" className={styles.logo} />
        </a>
        <ul className={styles.content}>
          <li>
            <a href="#presentation" className={styles.link}>
              présentation
            </a>
          </li>
          <li>
            <a href="#projets" className={styles.link}>
              projets
            </a>
          </li>
          <li>
            <a href="#parcours" className={styles.link}>
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
