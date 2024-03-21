import React, { useState } from "react";
import styles from "../styles/Textarea.module.scss";

const Textarea = (props) => {
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

  const handleChange = (e) => {
    const newValue = e.target.value;
    setValue(newValue);
    if (props.handleType) {
      props.handleType(props.name, newValue);
    }
  };

  return (
    <div className={styles.container}>
      <textarea
        className={styles.container__textarea}
        id={props.name}
        onChange={handleChange}
        value={value}
        maxLength={props.maxLength}
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

export default Textarea;
