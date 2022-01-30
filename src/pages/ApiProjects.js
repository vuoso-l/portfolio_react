import React from "react";
import { CardContainer } from "../components/BasicTagsStyle";
import CardItem from "../components/CardItem";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { HomeStyle } from "../components/HomeStyle";
import CardTitle from "../components/CardTitle";

const ApiProject = () => {
  return (
    <HomeStyle>
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
    </HomeStyle>
  );
};

export default ApiProject;
