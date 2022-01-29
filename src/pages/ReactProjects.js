import React from "react";
import CardComponent from "../components/Card";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { HomeStyle } from "../components/HomeStyle";

const ReactProjects = () => {
  return (
    <HomeStyle>
      <Header />
      <CardComponent name="Cambio tema claro a oscuro" urlImg="https://res.cloudinary.com/lupevu/image/upload/v1643460720/theme-dark-light_x9pjcs.jpg" />
      <CardComponent name="Renderizado imágenes base" urlImg="https://res.cloudinary.com/lupevu/image/upload/v1643460720/solicitar_img_alnvpz.png" />
      <CardComponent name="Crud con API" urlImg="https://res.cloudinary.com/lupevu/image/upload/v1643460718/crud_azv4bt.png" />
      <CardComponent name="Buscador de canciones" urlImg="https://res.cloudinary.com/lupevu/image/upload/v1643460718/buscador_canciones_yy1zzc.jpg" />
      <CardComponent name="Renderizado imágenes con ventana moda" urlImg="https://res.cloudinary.com/lupevu/image/upload/v1643460719/modal_n9v2o9.jpg" />
      <Footer />
    </HomeStyle>
  );
};

export default ReactProjects;