import React from "react";
import styles from "../styles/Button.module.scss";

const Button = (props) => {
  const containerClass = props.secondary
    ? `${styles.secondary} ${styles.container}`
    : `${styles.primary} ${styles.container}`;

  return (
    <a href={props.link} className={containerClass} onClick={props.handleClick}>
      {props.content}
    </a>
  );
};

export default Button;
