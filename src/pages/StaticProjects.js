import React from "react";
import CardComponent from "../components/Card";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { HomeStyle } from "../components/HomeStyle";

const StaticProjects = () => {
  return (
    <HomeStyle>
      <Header />
      <CardComponent
        name="Petshop"
        urlImg="https://res.cloudinary.com/lupevu/image/upload/v1643460719/pawprint_1_h6yz0v.svg"
        urlPage="https://vuoso-l.github.io/Frontend1/petShop/"
      />
      <CardComponent
        name="Súper héroes"
        urlImg="https://res.cloudinary.com/lupevu/image/upload/v1643463142/liga_de_la_justicia_ffsmdn.jpg"
        urlPage="https://vuoso-l.github.io/Frontend1/heroes/"
      />
      <CardComponent
        name="CV - Lucas Vuoso"
        urlImg="https://res.cloudinary.com/lupevu/image/upload/v1643460720/perfil_linkedin_nbiufp.jpg"
        urlPage="https://vuoso-l.github.io/curriculum_vitae/"
      />
      <CardComponent
        name="Batman"
        urlImg="https://res.cloudinary.com/lupevu/image/upload/v1643460719/liga-justicia-batman_iz16kt.svg"
        urlPage="https://vuoso-l.github.io/Frontend1/cv_batman/"
      />
      <CardComponent
        name="Lemon pie"
        urlImg="https://res.cloudinary.com/lupevu/image/upload/v1643460719/lemon-pie-1_evd4xk.svg"
        urlPage="https://vuoso-l.github.io/Frontend1/lemon_pie/"
      />
      <CardComponent
        name="Pizzería"
        urlImg="https://res.cloudinary.com/lupevu/image/upload/v1643460720/VectorPizza_swfbqd.svg"
        urlPage="https://vuoso-l.github.io/Frontend1/pizza/"
      />
      <Footer />
    </HomeStyle>
  );
};

export default StaticProjects;
