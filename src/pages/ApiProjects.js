import React, { useContext } from "react";
import { CardContainer } from "../components/BasicTagsStyle";
import CardItem from "../components/CardItem";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { ContainerStyle } from "../components/ContainerStyle";
import CardTitle from "../components/CardTitle";
import ThemeContext from "../context/ThemeContext";

const ApiProject = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <ContainerStyle theme={theme}>
      <Header />
      <main>
        <CardTitle title="Proyectos realizados con API propia" />
        <CardContainer>
          <CardItem
            name="Web Manteca & Harina"
            urlImg="https://res.cloudinary.com/lupevu/image/upload/v1643460719/logo_m_h_rdgobd.jpg"
            urlPage="https://vuoso-l.github.io/client-manteca-y-harina/"
          />
          <CardItem
            name="GitHub de la API Rest de M & H"
            urlImg="https://res.cloudinary.com/lupevu/image/upload/v1643460719/logo_github_uoyzl1.png"
            urlPage="https://github.com/vuoso-l/api-manteca-y-harina/"
          />
        </CardContainer>
      </main>
      <Footer />
    </ContainerStyle>
  );
};

export default ApiProject;
