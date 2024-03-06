import React from "react";
import Button from "./Button";
import styles from "../styles/Card.module.scss";

const Card = (props) => {
  const handleClick = () => console.log(props);

  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <img alt={props.name} src={props.imagesUrl} />
      </div>
      <div className={styles.content}>
        <h4>{props.name}</h4>
        <p className={styles.description}>{props.description}</p>
      </div>
      <Button content="en savoir plus" handleClick={handleClick} />
    </div>
  );
};

export default Card;
