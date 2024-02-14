import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import styles from "../styles/Modal.module.scss";

const Modal = (props) => {
  const handleClose = () => {
    props.closeModal();
  };

  const imgList = props.modalData.imagesUrl.map((item, index) => (
    <img src={item} key={index} className={styles.img} />
  ));

  return (
    <div className={styles.container} style={props.style}>
      {/* <div className={styles.content} ref={modalRef}> */}
      <div className={styles.content}>
        <div className={styles.content__text}>
          <h4>{props.modalData.name}</h4>
          {/* <a href={props.link} target="_blank" className={styles.link}> */}
          {/* {props.link}
          </a> */}
          <p className={styles.description}>{props.modalData.description}</p>
        </div>
        <div className={styles.content__img}>{imgList}</div>
        <FontAwesomeIcon
          icon={faXmark}
          className={styles.close}
          onClick={(event) => handleClose()}
        />
      </div>
    </div>
  );
};

export default Modal;
