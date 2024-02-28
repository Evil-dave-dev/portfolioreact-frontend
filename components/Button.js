import React from "react";
import styles from "../styles/Button.module.scss";

const Button = (props) => {
  const handleClick = () => {
    if (props.openModal) {
      console.log("open");
    }
  };

  return (
    <a href={props.link} className={styles.container} onClick={handleClick}>
      {props.content}
    </a>
  );
};

export default Button;
