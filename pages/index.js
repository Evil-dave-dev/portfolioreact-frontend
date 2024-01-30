import React, { useEffect, useState } from "react";
import styles from "../styles/Home.module.scss";
import Card from "../components/Card";
import Modal from "../components/Modal";

function Index() {
  const [projects, setProjects] = useState([]);
  const openModal = () => console.log("click");

  useEffect(() => {
    fetch("https://portfolioreact-backend.vercel.app/projects")
      .then((response) => response.json())
      .then((data) => {
        setProjects(
          data.res.map((e, index) => {
            return (
              <>
                <Card
                  key={index}
                  name={e.name}
                  subName={e.subName}
                  link={e.link}
                  description={e.description}
                  background={e.background}
                  logo={e.logo}
                  onClick={openModal}
                />
              </>
            );
          })
        );
      })
      .catch((error) => {
        console.error("Error: ", error);
      });
  }, []);

  return (
    <main className={styles.main}>
      <h1 className={styles.title}>portfolio David</h1>
      <section className={styles.projects__container}>
        <div className={styles.projects__content}>{projects}</div>
      </section>
    </main>
  );
}

export default Index;
