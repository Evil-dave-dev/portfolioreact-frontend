import React, { useEffect, useState } from "react";
import styles from "../styles/Home.module.scss";
import Card from "../components/Card";
import Modal from "../components/Modal";
import Navbar from "../components/Navbar";
import Button from "../components/Button";

function Index() {
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (e) => {
    setSelectedProject(e);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  useEffect(() => {
    fetch("https://portfolioreact-backend.vercel.app/projects")
      .then((response) => response.json())
      .then((data) => {
        setProjects(
          data.res.map((project, index) => {
            return (
              <Card
                key={index}
                name={project.name}
                subName={project.subName}
                link={project.link}
                description={project.description}
                background={project.background}
                logo={project.logo}
                openModal={openModal}
              />
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
      <Navbar />
      <section className={styles.presentation} id="presentation">
        <h5 className={styles.name}>david stevenoot</h5>
        <h1 className={styles.title}>frontend developer</h1>
        <p>
          Développeur web Lillois de 39 ans, j'ai effectué une reconversion
          professionnelle en 2017. Je suis devenu intégrateur Web chez KIMPLE
          puis développeur frontend chez REEZOCAR. En 2023, j'ai effectué une
          formation en fullstack à La Capsule, je maitrise maintenant les
          services backend ainsi que la gestion de base de données, webservices
          et API. Je cherche acutellement un poste de développeur frontend sur
          Lille.
        </p>
        <Button content="découvrir" link="#projets" />
      </section>
      <section className={styles.projects__container} id="projets">
        <div className={styles.projects__content}>{projects}</div>
        {selectedProject && (
          <Modal
            closeModal={closeModal}
            name={selectedProject.name}
            subName={selectedProject.subName}
            link={selectedProject.link}
            description={selectedProject.description}
            style={{ opacity: selectedProject ? 1 : 0 }}
          />
        )}
      </section>
      <section id="skills"></section>
    </main>
  );
}

export default Index;
