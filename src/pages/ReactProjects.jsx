import React, { useContext } from "react";
import CardItem from "../components/CardItem";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { ContainerStyle } from "../stylesComponents/ContainerStyle";
import CardTitle from "../components/CardTitle";
import { CardContainer } from "../stylesComponents/BasicTagsStyle";
import ThemeContext from "../context/ThemeContext";

const ReactProjects = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <ContainerStyle theme={theme}>
      <Header />
      <main>
        <CardTitle title="Proyectos React JS" nav="/proyectos" />
        <CardContainer>
          <CardItem
            name="Frontend Challenge - Alkemy"
            urlImg="https://res.cloudinary.com/lupevu/image/upload/v1649370256/challenge_alkemy_ypaled.jpg"
            urlPage="https://alkemy-react-challenge-one.vercel.app/login"
          />
          <CardItem
            name="Frontend Challenge - Siempre en Casa"
            urlImg="https://res.cloudinary.com/lupevu/image/upload/v1646409109/challenge_frontend-sec_djx70i.jpg"
            urlPage="https://frontend-challenge-sec.vercel.app/"
          />
          <CardItem
            name="Cambio tema claro a oscuro"
            urlImg="https://res.cloudinary.com/lupevu/image/upload/v1643460720/theme-dark-light_x9pjcs.jpg"
            urlPage="https://vuoso-l.github.io/react_render-images//"
          />
          <CardItem
            name="Renderizado imágenes base"
            urlImg="https://res.cloudinary.com/lupevu/image/upload/v1643460720/solicitar_img_alnvpz.png"
            urlPage="https://vuoso-l.github.io/react_parcel-sandbox/"
          />
          <CardItem
            name="Crud con API"
            urlImg="https://res.cloudinary.com/lupevu/image/upload/v1643460718/crud_azv4bt.png"
            urlPage="https://vuoso-l.github.io/react-crud-api_curso_jonMircha/"
          />
          <CardItem
            name="Buscador de canciones"
            urlImg="https://res.cloudinary.com/lupevu/image/upload/v1643460718/buscador_canciones_yy1zzc.jpg"
            urlPage="https://vuoso-l.github.io/react-buscador_canciones_curso_jonMircha/"
          />
          <CardItem
            name="Renderizado imágenes con ventana moda"
            urlImg="https://res.cloudinary.com/lupevu/image/upload/v1643460719/modal_n9v2o9.jpg"
            urlPage="https://vuoso-l.github.io/react-modals_curso_jonMircha-/"
          />
        </CardContainer>
      </main>
      <Footer />
    </ContainerStyle>
  );
};

export default ReactProjects;
