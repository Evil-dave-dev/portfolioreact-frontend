import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import styles from "../styles/Modal.module.scss";

const Modal = (props) => {
  const handleClose = () => {
    console.log("close");
  };

  return (
    <div className={styles.container} style={props.style}>
      <div className={styles.content} ref={modalRef}>
        <div className={styles.text}>
          <h4>{props.name}</h4>
          <p className={styles.subName}>{props.subName}</p>
          <a href={props.link} target="_blank" className={styles.link}>
            {props.link}
          </a>
          <p className={styles.description}>{props.description}</p>
        </div>
        <FontAwesomeIcon
          icon={faXmark}
          className={styles.close}
          onClick={(event) => handleClose(event)}
        />
        {img}
      </div>
    </div>
  );
};

export default Modal;
