import React, { useContext } from "react";
import CardItem from "../components/CardItem";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { ContainerStyle } from "../stylesComponents/ContainerStyle";
import CardTitle from "../components/CardTitle";
import { CardContainer } from "../stylesComponents/BasicTagsStyle";
import ThemeContext from "../context/ThemeContext";

const VanillaJsProjects = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <ContainerStyle theme={theme}>
      <Header />
      <main>
        <CardTitle title="Vanilla Javascript projects" nav="/projects" />
        <CardContainer>
          <CardItem
            name="ToDo app"
            urlImg="https://res.cloudinary.com/lupevu/image/upload/v1643460720/ToDo_app_wmcnac.png"
            urlPage="https://vuoso-l.github.io/Frontend2/ToDo_inicial"
          />
          <CardItem
            name="The feline family"
            urlImg="https://res.cloudinary.com/lupevu/image/upload/v1643460718/felino_enzj5l.jpg"
            urlPage="https://vuoso-l.github.io/Frontend2/tema_oscuro_C5S/"
          />
          <CardItem
            name="Parcel SandBox"
            urlImg="https://res.cloudinary.com/lupevu/image/upload/v1643460720/solicitar_img_alnvpz.png"
            urlPage="https://vuoso-l.github.io/Frontend2/estructura_DOM_templatesLiteral_C6S/"
          />
          <CardItem
            name="Fetch API-get"
            urlImg="https://res.cloudinary.com/lupevu/image/upload/v1643460718/fetch_vbhjqi.jpg"
            urlPage="https://vuoso-l.github.io/Frontend2/fetch-api-get/"
          />
          <CardItem
            name="Chronometer"
            urlImg="https://res.cloudinary.com/lupevu/image/upload/v1643460718/cronometro_zoeram.jpg"
            urlPage="https://vuoso-l.github.io/Frontend2/cronometro_C8/"
          />
        </CardContainer>
      </main>
      <Footer />
    </ContainerStyle>
  );
};

export default VanillaJsProjects;
