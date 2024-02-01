import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import React, { useRef, useEffect } from "react";
import styles from "../styles/Modal.module.scss";

const Modal = (props) => {
  const modalRef = useRef();

  const handleClick = (event) => {
    if (!modalRef.current.contains(event.target)) {
      props.closeModal(props.name);
    }
  };

  const handleClose = () => {
    props.closeModal(props.name);
  };

  useEffect(() => {
    fetch("https://portfolioreact-backend.vercel.app/img")
      .then((response) => response.json())
      .then((data) => {
        data.photos.map((src, index) => {
          return <img key={index} src={src} />;
        });
      })
      .catch((error) => {
        console.error("Error: ", error);
      });
  }, []);

  return (
    <div
      className={styles.container}
      style={props.style}
      onClick={(event) => handleClick(event)}
    >
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
        <img src="01.jpg" className={styles.img} />
        <img src="02.jpg" className={styles.img} />
        <img src="03.jpg" className={styles.img} />
        <img src="04.jpg" className={styles.img} />
      </div>
    </div>
  );
};

export default Modal;
