import React, { useState } from "react";
import { Project, Modal, Navbar, Button, Card } from "../components";
import "react-multi-carousel/lib/styles.css";
import styles from "../styles/Home.module.scss";
import { projectData, responsive } from "../data/data";

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

  return (
    <main className={styles.main}>
      <Navbar />
      <section className={styles.presentation} id="presentation">
        <h2 className={styles.primary}>david stevenoot</h2>
        <h1 className={styles.title}>frontend developer</h1>
        <Button content="découvrir" link="#projets" />
      </section>
      <section className={styles.projects} id="projets">
        <Carousel infinite={true} responsive={responsive}>
          {project}
        </Carousel>
      </section>
      <section id="parcours" className={styles.parcours}>
        <h3 className={styles.parcours__title}>
          expériences <span className={styles.primary}>professionnelles</span>
        </h3>
        <Carousel infinite={true} responsive={responsive}>
          <Card name="kimple" description="lorem ipsum" />
          <Card name="reezocar" description="lorem ipsum" />
        </Carousel>
      </section>
      {showModal && (
        <Modal closeModal={() => closeModal()} modalData={modalData} />
      )}
    </main>
  );
}

export default Index;
