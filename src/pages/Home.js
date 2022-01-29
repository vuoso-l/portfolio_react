import React from "react";
import CardComponent from "../components/Card";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { HomeStyle } from "../components/HomeStyle";

const Home = () => {
  return (
    <HomeStyle>
      <Header />
      <CardComponent name="Proyectos con API propia" urlImg="https://res.cloudinary.com/lupevu/image/upload/v1643460718/front-api_r0nve2.png" />
      <CardComponent name="Proyectos React JS" urlImg="https://res.cloudinary.com/lupevu/image/upload/v1643460719/react_tctrfo.png" />
      <CardComponent name="Proyectos Vanilla Javascript" urlImg="https://res.cloudinary.com/lupevu/image/upload/v1643460718/html-css-js_lesdpl.png" />
      <CardComponent name="Proyectos estáticos" urlImg="https://res.cloudinary.com/lupevu/image/upload/v1643460718/html-css_s2djr2.jpg" />
      <Footer />
    </HomeStyle>
  );
};

export default Home;
