import styles from "../styles/Card.module.scss";

const Card = (props) => {
  return (
    <div
      className={styles.container}
      style={{ backgroundColor: props.background }}
    >
      <div className={styles.content}>
        <div>
          <h3 className={styles.title}>{props.name}</h3>
          <p className={styles.subtitle}>{props.subName}</p>
        </div>
        <div className={styles.link}>
          <img
            src="github-icon.svg"
            alt="github-icon"
            className={styles.link__logo}
          />
          <a className={styles.link__url} href={props.link} target="_blank">
            {props.link}
          </a>
        </div>
        <p className={styles.description}>{props.description}</p>
      </div>
      <div className={styles.logo}>
        <img src={props.logo + ".png"} alt={props.logo} />
      </div>
    </div>
  );
};

export default Card;
