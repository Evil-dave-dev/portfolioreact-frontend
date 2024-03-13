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

  let content = null;

  switch (props.modalData.contentType) {
    case "project":
      const imgList = props.modalData.imagesUrl.map((item, index) => (
        <img src={item} key={index} className={styles.img} />
      ));
      content = (
        <>
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
        </>
      );
      break;
    case "experience":
      content = (
        <>
          <h4>{props.modalData.name}</h4>
          <p className={styles.description}>{props.modalData.description}</p>
          <a
            href={props.modalData.link}
            target="_blank"
            className={styles.link}
          >
            {props.modalData.link}
          </a>
          <img src={props.modalData.imagesUrl} className={styles.img} />
        </>
      );
      break;
    default:
      content = <p className={styles.description}>le contenu est inexistant</p>;
  }

  return (
    <div className={styles.container} onClick={handleClose}>
      <div className={styles.content} ref={modalRef}>
        {content}
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
