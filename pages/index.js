import React, { useState } from "react";
import { Project, Modal, Navbar, Button } from "../components";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import styles from "../styles/Home.module.scss";
import { projectData, responsive } from "../data/data";

function Index() {
  const [showModal, setShowModal] = useState(false);

  const openModal = (imageurl) => {
    console.log(imageurl.url01, imageurl.url02, imageurl.url03);
    setShowModal(true);
  };

  const closeModal = (imageurl) => {
    setShowModal(false);
  };

  const project = projectData.map((item, index) => (
    <Project
      name={item.name}
      url={item.imageurl}
      key={index}
      openModal={() => openModal(item)}
    />
  ));

  return (
    <main className={styles.main}>
      <Navbar />
      <section className={styles.presentation} id="presentation">
        <div>
          <h2 className={styles.name}>david stevenoot</h2>
          <h1 className={styles.title}>frontend developer</h1>
        </div>
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
        <Carousel infinite={true} responsive={responsive}>
          {project}
        </Carousel>
      </section>
      <section id="skills"></section>
      {showModal && <Modal closeModal={() => closeModal()} />}
    </main>
  );
}

export default Index;
