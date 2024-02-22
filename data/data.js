export const responsiveProject = {
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

export const responsiveExperience = {
  breakpointSm: {
    breakpoint: { max: 4000, min: 576 },
    items: 2,
  },
  breakpointXs: {
    breakpoint: { max: 576, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

export const experienceData = [
  {
    name: "kimple",
    description:
      "Kimple est une solution marketing en mode SAAS qui permet, grâce au jeu marketing, de capturer les données et de renforcer la connaissance de vos clients.",
  },
  {
    name: "reezocar",
    description:
      "Reezocar regroupe des millions de petites annonces auto en Europe : trouvez une voiture d'occasion, un leasing ou une voiture neuve au meilleur prix.",
  },
];
