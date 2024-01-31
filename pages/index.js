import React, { useEffect, useState } from "react";
import styles from "../styles/Home.module.scss";
import Card from "../components/Card";
import Modal from "../components/Modal";

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
      <h1 className={styles.title}>portfolio David</h1>
      <section className={styles.projects__container}>
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
    </main>
  );
}

export default Index;
