import React from "react";
import styles from "../styles/Project.module.scss";

const Project = (props) => {
  const handleClick = () => {
    props.openModal();
  };

  return (
    <div className={styles.card} onClick={() => handleClick()}>
      <img src={props.url} alt={props.name} className={styles.card__img} />
      <h2 className={styles.card__name}>{props.name}</h2>
    </div>
  );
};

export default Project;
