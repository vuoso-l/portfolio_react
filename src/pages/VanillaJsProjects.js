import React from "react";
import CardComponent from "../components/Card";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { HomeStyle } from "../components/HomeStyle";

const VanillaJsProjects = () => {
  return (
    <HomeStyle>
      <Header />
      <CardComponent
        name="ToDo app"
        urlImg="https://res.cloudinary.com/lupevu/image/upload/v1643460720/ToDo_app_wmcnac.png"
        urlPage="https://vuoso-l.github.io/Frontend2/ToDo_inicial"
      />
      <CardComponent
        name="La familia de los felinos"
        urlImg="https://res.cloudinary.com/lupevu/image/upload/v1643460718/felino_enzj5l.jpg"
        urlPage="https://vuoso-l.github.io/Frontend2/tema_oscuro_C5S/"
      />
      <CardComponent
        name="Parcel SandBox"
        urlImg="https://res.cloudinary.com/lupevu/image/upload/v1643460720/solicitar_img_alnvpz.png"
        urlPage="https://vuoso-l.github.io/Frontend2/estructura_DOM_templatesLiteral_C6S/"
      />
      <CardComponent
        name="Fetch API-get"
        urlImg="https://res.cloudinary.com/lupevu/image/upload/v1643460718/fetch_vbhjqi.jpg"
        urlPage="https://vuoso-l.github.io/Frontend2/fetch-api-get/"
      />
      <CardComponent
        name="Cronómetro"
        urlImg="https://res.cloudinary.com/lupevu/image/upload/v1643460718/cronometro_zoeram.jpg"
        urlPage="https://vuoso-l.github.io/Frontend2/cronometro_C8/"
      />
      <Footer />
    </HomeStyle>
  );
};

export default VanillaJsProjects;
