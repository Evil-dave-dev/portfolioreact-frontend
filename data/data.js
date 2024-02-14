export const responsive = {
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

export const projectData = [
  {
    id: 1,
    thumbnailUrl: "hackatweet.png",
    imagesUrl: [
      "hackatweet-01.png",
      "hackatweet-02.png",
      "hackatweet-03.png",
      "hackatweet-04.png",
      "hackatweet-05.png",
    ],
    name: "hackatweet",
    description:
      "Hackatweet est un projet de formation qui a été développé en 2 jours et qui consiste à recréer un mini Twitter",
    link: "https://github.com/alexdelac/hackatweet-frontend",
  },
  {
    id: 2,
    thumbnailUrl: "recipeshop.png",
    imagesUrl: ["recipeshop-01.jpg", "recipeshop-02.jpg"],
    name: "recipeshop",
    description:
      "Recipe shop est mon projet de fin de formation. Je l'ai développé en 2 semaines et c'est une application en React Native qui sert à gérer une liste de courses. Une base de données de recettes est fourni dans cette même application et en place sur mongoDB.",
    link: "https://github.com/VictorHazebrouck/recipe-shop-frontend",
  },
  {
    id: 3,
    thumbnailUrl: "tickethack.png",
    imagesUrl: ["tickethack-01.png", "tickethack-02.png", "tickethack-03.png"],
    name: "tickethack",
    description:
      "Tickethack est un projet de formation développé en 2 jours, qui consiste à créer une application en React pour acheter des billets de train.",
    link: "https://github.com/Evil-dave-dev/tickethack-frontend",
  },
];
