import React from "react";
import Button from "./Button";
import styles from "../styles/Card.module.scss";

const Card = (props) => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <img alt="logo" src="logo.png" />
      </div>
      <h4>{props.name}</h4>
      <p>{props.description}</p>
      <Button content="en savoir plus" />
    </div>
  );
};

export default Card;
