import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import React, { useRef } from "react";
import styles from "../styles/Modal.module.scss";

const Modal = (props) => {
  const modalRef = useRef(null);

  const handleClose = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      props.closeModal();
    }
  };

  const imgList = props.modalData.imagesUrl.map((item, index) => (
    <img src={item} key={index} className={styles.img} />
  ));

  return (
    <div className={styles.container} onClick={handleClose}>
      <div className={styles.content} ref={modalRef}>
        <div className={styles.content__text}>
          <h4>{props.modalData.name}</h4>
          <a
            href={props.modalData.link}
            target="_blank"
            className={styles.link}
          >
            {props.modalData.link}
          </a>
          <p className={styles.description}>{props.modalData.description}</p>
        </div>
        <div className={styles.content__img}>{imgList}</div>
        <FontAwesomeIcon
          icon={faXmark}
          className={styles.close}
          onClick={props.closeModal}
        />
      </div>
    </div>
  );
};

export default Modal;
