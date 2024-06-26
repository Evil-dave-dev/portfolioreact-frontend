import React, { useState } from "react";
import {
  Project,
  Modal,
  Navbar,
  Button,
  Card,
  Skills,
  Contact,
} from "../components";
import { JavascriptSvg, ReactSvg, NodeSvg, MongoSvg } from "../svg";
import { projectData, experienceData, responsiveProject } from "../data/data";
import "react-multi-carousel/lib/styles.css";
import styles from "../styles/Home.module.scss";

import Carousel from "react-multi-carousel";

function Index() {
  const [projectModal, setProjectModal] = useState(false);
  const [modalData, setmodalData] = useState({});

  const [experienceModal, setExperienceModal] = useState(false);

  const openModal = (modalData) => {
    if (modalData) {
      const newModalData = {
        name: modalData.name,
        description: modalData.description,
        imagesUrl: modalData.imagesUrl,
        link: modalData.link,
        contentType: modalData.contentType,
      };
      setProjectModal(true);
      setmodalData(newModalData);
    } else {
      setExperienceModal(true);
    }
  };

  const closeModal = () => {
    setProjectModal(false);
  };

  const project = projectData.map((item, index) => (
    <Project
      name={item.name}
      thumbnailUrl={item.thumbnailUrl}
      key={index}
      openModal={() => openModal(item)}
    />
  ));

  const experience = experienceData.map((item, index) => (
    <div key={index} className={styles.experiences__item}>
      <Card
        name={item.name}
        description={item.description}
        thumbnailUrl={item.thumbnailUrl}
        openModal={() => openModal(item)}
      />
    </div>
  ));

  return (
    <main className={styles.main}>
      <Navbar />
      <section className={styles.presentation} id="presentation">
        <h2 className={styles.primary}>david stevenoot</h2>
        <h1 className={styles.title}>frontend developer</h1>
        <Button content="découvrir" link="#project" />
      </section>
      <section className={styles.projects} id="project">
        <h2 className={styles.projects__title}>projets</h2>
        <Carousel infinite={true} responsive={responsiveProject}>
          {project}
        </Carousel>
      </section>
      <section className={styles.experiences} id="experiences">
        <h2 className={styles.experiences__title}>experiences</h2>
        <div className={styles.experiences__content}>{experience}</div>
      </section>
      <section className={styles.skills} id="skills">
        <h2 className={styles.skills__title}>skills</h2>
        <div className={styles.skills__content}>
          <Skills
            svg={<JavascriptSvg width="60" height="60" />}
            name="Javascript"
          />
          <Skills svg={<ReactSvg width="60" height="60" />} name="React" />
          <Skills svg={<NodeSvg width="60" height="60" />} name="Node JS" />
          <Skills svg={<MongoSvg width="60" height="60" />} name="MongoDB" />
        </div>
      </section>
      <section className={styles.contact} id="contact">
        <h2 className={styles.contact__title}>
          Contactez <span className={styles.primary}>moi</span>
        </h2>
        <Contact />
      </section>
      <footer></footer>
      {projectModal && (
        <Modal closeModal={() => closeModal()} modalData={modalData} />
      )}
      {experienceModal && (
        <Modal closeModal={() => closeModal()} modalData={modalData} />
      )}
    </main>
  );
}

export default Index;
