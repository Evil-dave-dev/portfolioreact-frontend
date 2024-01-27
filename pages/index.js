import styles from "../styles/Home.module.scss";
import Card from "../components/Card";

function Index() {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>portfolio David</h1>
      <section className={styles.projects__container}>
        <div className={styles.projects__content}>
          <Card
            name="tickethack"
            subName="(projet de formation)"
            link="https://github.com/Evil-dave-dev/tickethack-frontend"
            description="tickethack est une une application d'achat de ticket de train en ligne"
            background="#AB2346"
            logo="train"
          />
          <Card
            name="recipe shop"
            subName="(projet de formation)"
            link="https://github.com/VictorHazebrouck/recipe-shop-frontend"
            description="recipe shop est une app React native qui gère une liste de course pour l'utilisateur à partir de recettes proposées"
            background="#188FA7"
            logo="recipe"
          />
        </div>
      </section>
    </main>
  );
}

export default Index;
