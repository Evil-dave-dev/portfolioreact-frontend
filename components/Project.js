import React from "react";
import styles from "../styles/Project.module.scss";

const Project = (props) => {
  const handleClick = () => {
    props.openModal();
  };

  return (
    <div className={styles.container} onClick={() => handleClick()}>
      <img
        src={props.thumbnailUrl}
        alt={props.name}
        className={styles.container__img}
      />
      <h2 className={styles.container__name}>{props.name}</h2>
    </div>
  );
};

export default Project;
