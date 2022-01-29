import React from "react";
import CardComponent from "../components/Card";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { HomeStyle } from "../components/HomeStyle";

const Home = () => {
  return (
    <HomeStyle>
      <Header />
      <CardComponent name="Proyectos con API propia" url="https://img.fotocommunity.com/tigre-9c2e27e0-daa6-404d-bd86-9576db164bb8.jpg?height=400" />
      <CardComponent name="Proyectos React JS" />
      <CardComponent name="Proyectos Vanilla Javascript" />
      <CardComponent name="Proyectos estáticos" />
      <Footer />
    </HomeStyle>
  );
};

export default Home;
