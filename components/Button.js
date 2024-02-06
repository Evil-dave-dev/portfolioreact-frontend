import React from "react";
import styles from "../styles/Button.module.scss";

const Button = (props) => {
  return (
    <a href={props.link} className={styles.container}>
      {props.content}
    </a>
  );
};

export default Button;
