import React from "react";
import styles from "../styles/Navbar.module.scss";

const Navbar = () => {
  return (
    <nav className={styles.container}>
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
          <a href="#skills" className={styles.link}>
            skills
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
