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

  const [formValues, setFormValues] = useState(formInitialDetails);

  const handleChange = (fieldName, newValue) => {
    setFormValues((prevState) => ({
      ...prevState,
      [fieldName]: newValue,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch("https://portfolioreact-backend.vercel.app/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formValues),
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
  };

  return (
    <form className={styles.container} onSubmit={handleSubmit}>
      <Input
        name="name"
        type="text"
        value={formValues.name}
        onChange={(newValue) => handleChange("name", newValue)}
      />
      <Input
        name="email"
        type="email"
        value={formValues.email}
        onChange={(newValue) => handleChange("email", newValue)}
      />
      <Textarea
        name="message"
        value={formValues.message}
        onChange={(newValue) => handleChange("message", newValue)}
      />
      <button type="submit" className={styles.button}>
        send
      </button>
    </form>
  );
};

export default Contact;
