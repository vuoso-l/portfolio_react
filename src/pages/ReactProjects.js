import React from "react";
import CardComponent from "../components/Card";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { HomeStyle } from "../components/HomeStyle";

const ReactProjects = () => {
  return (
    <HomeStyle>
      <Header />
      <CardComponent
        name="Cambio tema claro a oscuro"
        urlImg="https://res.cloudinary.com/lupevu/image/upload/v1643460720/theme-dark-light_x9pjcs.jpg"
        urlPage="https://vuoso-l.github.io/react_render-images//"
      />
      <CardComponent
        name="Renderizado imágenes base"
        urlImg="https://res.cloudinary.com/lupevu/image/upload/v1643460720/solicitar_img_alnvpz.png"
        urlPage="https://vuoso-l.github.io/react_parcel-sandbox/"
      />
      <CardComponent
        name="Crud con API"
        urlImg="https://res.cloudinary.com/lupevu/image/upload/v1643460718/crud_azv4bt.png"
        urlPage="https://vuoso-l.github.io/react-crud-api_curso_jonMircha/"
      />
      <CardComponent
        name="Buscador de canciones"
        urlImg="https://res.cloudinary.com/lupevu/image/upload/v1643460718/buscador_canciones_yy1zzc.jpg"
        urlPage="https://vuoso-l.github.io/react-buscador_canciones_curso_jonMircha/"
      />
      <CardComponent
        name="Renderizado imágenes con ventana moda"
        urlImg="https://res.cloudinary.com/lupevu/image/upload/v1643460719/modal_n9v2o9.jpg"
        urlPage="https://vuoso-l.github.io/react-modals_curso_jonMircha-/"
      />
      <Footer />
    </HomeStyle>
  );
};

export default ReactProjects;
