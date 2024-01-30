import styles from "../styles/Modal.module.scss";

const Modal = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        tickethack est une une application d'achat de ticket de train en ligne
        <span className={styles.close}>&times;</span>
      </div>
    </div>
  );
};

export default Modal;
