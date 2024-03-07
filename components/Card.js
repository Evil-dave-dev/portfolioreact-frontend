import React from "react";
import Button from "./Button";
import styles from "../styles/Card.module.scss";
import { useDispatch } from "react-redux";
import { addDataToModal } from "../reducers/modal";

const Card = (props) => {
  const dispatch = useDispatch();
  const handleClick = () => {
    console.log(props);
    dispatch(addDataToModal(props));
  };

  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <img alt={props.name} src={props.imagesUrl} />
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
