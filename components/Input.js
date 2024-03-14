import React, { useState } from "react";
import styles from "../styles/Input.module.scss";

const Input = (props) => {
  const [value, setValue] = useState("");
  const [focused, setFocused] = useState(false);

  const handleFocus = () => {
    setFocused(true);
  };

  const handleBlur = () => {
    if (!value) {
      setFocused(false);
    }
  };

  return (
    <div className={styles.container}>
      <input
        className={styles.container__input}
        id={props.name}
        onChange={(e) => setValue(e.target.value)}
        value={value}
        onFocus={handleFocus}
        onBlur={handleBlur}
        {...props}
      />
      <label
        className={`${styles.container__label} ${
          focused || value ? styles.focused : ""
        }`}
        htmlFor={props.name}
      >
        {props.name}
      </label>
    </div>
  );
};

export default Input;
