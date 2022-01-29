import React from "react";
import CardComponent from "../components/Card";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { HomeStyle } from "../components/HomeStyle";

const StaticProjects = () => {
  return (
    <HomeStyle>
      <Header />
      <CardComponent name="Petshop" urlImg="https://res.cloudinary.com/lupevu/image/upload/v1643460719/pawprint_1_h6yz0v.svg" />
      <CardComponent name="Súper héroes" urlImg="https://res.cloudinary.com/lupevu/image/upload/v1643463142/liga_de_la_justicia_ffsmdn.jpg" />
      <CardComponent name="CV - Lucas Vuoso" urlImg="https://res.cloudinary.com/lupevu/image/upload/v1643460720/perfil_linkedin_nbiufp.jpg" />
      <CardComponent name="Batman" urlImg="https://res.cloudinary.com/lupevu/image/upload/v1643460719/liga-justicia-batman_iz16kt.svg" />
      <CardComponent name="Lemon pie" urlImg="https://res.cloudinary.com/lupevu/image/upload/v1643460719/lemon-pie-1_evd4xk.svg" />
      <CardComponent name="Pizzería" urlImg="https://res.cloudinary.com/lupevu/image/upload/v1643460720/VectorPizza_swfbqd.svg" />
      <Footer />
    </HomeStyle>
  );
};

export default StaticProjects;