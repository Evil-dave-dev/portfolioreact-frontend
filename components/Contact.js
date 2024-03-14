import React, { useState } from "react";
import styles from "../styles/Contact.module.scss";
import Input from "./Input";
import Textarea from "./TextArea";

const Contact = () => {
  const formInitialDetails = {
    name: "",
    email: "",
    message: "",
  };

  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState("Send");

  return (
    <form className={styles.container}>
      <Input name="name" />
      <Input name="email" />
      <Textarea name="message" />
      <button type="submit" className={styles.button}>
        {buttonText}
      </button>
    </form>
  );
};

export default Contact;
