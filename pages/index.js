import React from "react";
import { Project, Modal, Navbar, Button } from "../components";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import styles from "../styles/Home.module.scss";

function Index() {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 992 },
      items: 3,
    },
    breakpointSm: {
      breakpoint: { max: 992, min: 576 },
      items: 2,
    },
    breakpointXs: {
      breakpoint: { max: 576, min: 0 },
      items: 1,
    },
  };

  const projectData = [
    {
      id: 1,
      imageurl: "hackatweet.png",
      name: "hackatweet",
    },
    {
      id: 2,
      imageurl: "recipeshop.png",
      name: "recipeshop",
    },
    {
      id: 3,
      imageurl: "tickethack.png",
      name: "tickethack",
    },
  ];

  const project = projectData.map((item) => (
    <Project name={item.name} url={item.imageurl} />
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
        <Carousel responsive={responsive}>{project}</Carousel>
      </section>
      <section id="skills"></section>
    </main>
  );
}

export default Index;
