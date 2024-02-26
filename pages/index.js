import React, { useState } from "react";
import { Project, Modal, Navbar, Button, Card } from "../components";
import "react-multi-carousel/lib/styles.css";
import styles from "../styles/Home.module.scss";
import {
  projectData,
  experienceData,
  responsiveProject,
  responsiveExperience,
} from "../data/data";

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
    <Card name={item.name} description={item.description} key={index} />
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
          expériences <span className={styles.primary}>professionnelles</span>
        </h3>
        <div className={styles.parcours__content}>{experience}</div>
      </section>
      {showModal && (
        <Modal closeModal={() => closeModal()} modalData={modalData} />
      )}
    </main>
  );
}

export default Index;
