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
        loading="lazy"
      />
      <h3 className={styles.container__name}>{props.name}</h3>
    </div>
  );
};

export default Project;
