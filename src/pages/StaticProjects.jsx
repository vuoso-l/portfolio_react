import React, { useContext } from "react";
import CardItem from "../components/CardItem";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { ContainerStyle } from "../stylesComponents/ContainerStyle";
import CardTitle from "../components/CardTitle";
import { CardContainer } from "../stylesComponents/BasicTagsStyle";
import ThemeContext from "../context/ThemeContext";

const StaticProjects = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <ContainerStyle theme={theme}>
      <Header />
      <main>
        <CardTitle title="Proyectos estáticos" nav="/proyectos" />
        <CardContainer>
          <CardItem
            name="Petshop"
            urlImg="https://res.cloudinary.com/lupevu/image/upload/v1643460719/pawprint_1_h6yz0v.svg"
            urlPage="https://vuoso-l.github.io/Frontend1/petShop/"
          />
          <CardItem
            name="Súper héroes"
            urlImg="https://res.cloudinary.com/lupevu/image/upload/v1643463142/liga_de_la_justicia_ffsmdn.jpg"
            urlPage="https://vuoso-l.github.io/Frontend1/heroes/"
          />
          <CardItem
            name="CV - Lucas Vuoso"
            urlImg="https://res.cloudinary.com/lupevu/image/upload/v1643460720/perfil_linkedin_nbiufp.jpg"
            urlPage="https://vuoso-l.github.io/curriculum_vitae/"
          />
          <CardItem
            name="Batman"
            urlImg="https://res.cloudinary.com/lupevu/image/upload/v1643460719/liga-justicia-batman_iz16kt.svg"
            urlPage="https://vuoso-l.github.io/Frontend1/cv_batman/"
          />
          <CardItem
            name="Lemon pie"
            urlImg="https://res.cloudinary.com/lupevu/image/upload/v1643460719/lemon-pie-1_evd4xk.svg"
            urlPage="https://vuoso-l.github.io/Frontend1/lemon_pie/"
          />
          <CardItem
            name="Pizzería"
            urlImg="https://res.cloudinary.com/lupevu/image/upload/v1643460720/VectorPizza_swfbqd.svg"
            urlPage="https://vuoso-l.github.io/Frontend1/pizza/"
          />
        </CardContainer>
      </main>
      <Footer />
    </ContainerStyle>
  );
};

export default StaticProjects;
