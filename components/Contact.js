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

  const handleChange = (key, value) => {
    setFormDetails((prevDetails) => ({
      ...prevDetails,
      [key]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch("https://portfolioreact-backend.vercel.app/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formDetails),
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
  };

  return (
    <form className={styles.container} onSubmit={handleSubmit}>
      <Input name="name" type="text" handleChange={handleChange} />
      <Input name="email" type="email" handleChange={handleChange} />
      <Textarea name="message" handleChange={handleChange} />
      <button type="submit" className={styles.button}>
        {buttonText}
      </button>
    </form>
  );
};

export default Contact;
