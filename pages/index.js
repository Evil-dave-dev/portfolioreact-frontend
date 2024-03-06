import React, { useState } from "react";
import { Project, Modal, Navbar, Button, Card, Skills } from "../components";
import { JavascriptSvg, ReactSvg, NodeSvg, MongoSvg } from "../svg";
import { projectData, experienceData, responsiveProject } from "../data/data";
import "react-multi-carousel/lib/styles.css";
import styles from "../styles/Home.module.scss";

import Carousel from "react-multi-carousel";

function Index() {
  const [showModal, setShowModal] = useState(false);
  const [modalData, setmodalData] = useState({});

  const openModal = (modalData) => {
    const newModalData = {
      name: modalData.name,
      description: modalData.description,
      imagesUrl: modalData.imagesUrl,
      link: modalData.link,
    };
    setShowModal(true);
    setmodalData(newModalData);
  };

  const handleClick = () => console.log("click");

  const closeModal = () => {
    setShowModal(false);
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
    <div key={index} className={styles.parcours__item}>
      <Card
        name={item.name}
        description={item.description}
        imagesUrl={item.imagesUrl}
        handleClick={() => handleClick()}
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
        <Carousel infinite={true} responsive={responsiveProject}>
          {project}
        </Carousel>
      </section>
      <section className={styles.parcours} id="parcours">
        <h3 className={styles.parcours__title}>
          experiences <span className={styles.primary}>professionnelles</span>
        </h3>
        <div className={styles.parcours__content}>{experience}</div>
      </section>
      <section className={styles.skills} id="skills">
        <h3 className={styles.skills__title}>
          competences <span className={styles.primary}>techniques</span>
        </h3>
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
      {showModal && (
        <Modal closeModal={() => closeModal()} modalData={modalData} />
      )}
    </main>
  );
}

export default Index;
