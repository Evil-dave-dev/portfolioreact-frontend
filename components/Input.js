import React, { useState } from "react";
import styles from "../styles/Input.module.scss";

const Input = (props) => {
  const { name, type, value, onChange } = props;
  const [focused, setFocused] = useState(false);

  const handleFocus = () => {
    setFocused(true);
  };

  const handleBlur = () => {
    if (!value) {
      setFocused(false);
    }
  };

  const handleChange = (e) => {
    onChange(e.target.value);
  };

  return (
    <div className={styles.container}>
      <input
        className={styles.container__input}
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
      <label
        className={`${styles.container__label} ${
          focused || value ? styles.focused : ""
        }`}
        htmlFor={name}
      >
        {name}
      </label>
    </div>
  );
};

export default Input;
