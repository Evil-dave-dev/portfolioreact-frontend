import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import React, { useRef, useEffect, useState } from "react";
import styles from "../styles/Modal.module.scss";

const Modal = (props) => {
  const [img, setImg] = useState([]);
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
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://portfolioreact-backend.vercel.app/img"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch");
        }
        const data = await response.json();
        setPhotos(data.photos);
      } catch (error) {
        console.error("Error: ", error);
      }
    };

    fetchData();
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
        {img}
      </div>
    </div>
  );
};

export default Modal;
