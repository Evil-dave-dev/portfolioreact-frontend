import React from "react";
import Button from "./Button";
import styles from "../styles/Card.module.scss";

const Card = (props) => {
  const handleClick = () => {
    props.openModal();
  };

  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <img
          alt={props.name}
          src={props.thumbnailUrl}
          className={styles.logo__img}
        />
      </div>
      <div className={styles.content}>
        <h4>{props.name}</h4>
        <p className={styles.description}>{props.description}</p>
      </div>
      <Button
        content="en savoir plus"
        handleClick={handleClick}
        secondary={true}
      />
    </div>
  );
};

export default Card;
