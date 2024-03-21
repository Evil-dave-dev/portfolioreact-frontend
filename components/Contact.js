import React, { useState } from "react";
import styles from "../styles/Contact.module.scss";
import Input from "./Input";
import Textarea from "./Textarea";

const Contact = () => {
  const formInitialDetails = {
    name: "",
    email: "",
    message: "",
  };

  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState("Send");

  const handleType = (key, value) => {
    setFormDetails((prevDetails) => ({
      ...prevDetails,
      [key]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <form className={styles.container} onSubmit={handleSubmit}>
      <Input name="name" type="text" handleType={handleType} />
      <Input name="email" type="email" handleType={handleType} />
      <Textarea name="message" handleType={handleType} />
      <button type="submit" className={styles.button}>
        {buttonText}
      </button>
    </form>
  );
};

export default Contact;
