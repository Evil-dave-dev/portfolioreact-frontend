import React from "react";
import styles from "../styles/Skills.module.scss";

const Skills = (props) => {
  return (
    <div className={styles.container}>
      {props.svg}
      <h5 className={styles.container__name}>{props.name}</h5>
    </div>
  );
};

export default Skills;
