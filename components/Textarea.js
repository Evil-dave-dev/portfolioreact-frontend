import React, { useState } from "react";
import styles from "../styles/Textarea.module.scss";

const Textarea = (props) => {
  const { name, value, onChange } = props;
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
      <textarea
        className={styles.container__textarea}
        id={name}
        name={name}
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

export default Textarea;
