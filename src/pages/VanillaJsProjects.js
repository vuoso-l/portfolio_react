import React from "react";
import CardComponent from "../components/Card";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { HomeStyle } from "../components/HomeStyle";

const VanillaJsProjects = () => {
  return (
    <HomeStyle>
      <Header />
      <CardComponent name="ToDo app" urlImg="https://res.cloudinary.com/lupevu/image/upload/v1643460720/ToDo_app_wmcnac.png" />
      <CardComponent name="La familia de los felinos" urlImg="https://res.cloudinary.com/lupevu/image/upload/v1643460718/felino_enzj5l.jpg" />
      <CardComponent name="Parcel SandBox" urlImg="https://res.cloudinary.com/lupevu/image/upload/v1643460720/solicitar_img_alnvpz.png" />
      <CardComponent name="Fetch API-get" urlImg="https://res.cloudinary.com/lupevu/image/upload/v1643460718/fetch_vbhjqi.jpg" />
      <CardComponent name="Cronómetro" urlImg="https://res.cloudinary.com/lupevu/image/upload/v1643460718/cronometro_zoeram.jpg" />
      <Footer />
    </HomeStyle>
  );
};

export default VanillaJsProjects;