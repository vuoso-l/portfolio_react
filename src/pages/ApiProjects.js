import React from "react";
import CardComponent from "../components/Card";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { HomeStyle } from "../components/HomeStyle";

const ApiProject = () => {
  return (
    <HomeStyle>
      <Header />
      <CardComponent name="Web Manteca & Harina" urlImg="https://res.cloudinary.com/lupevu/image/upload/v1643460719/logo_m_h_rdgobd.jpg" />
      <CardComponent name="GitHub de la API Rest de M & H" urlImg="https://res.cloudinary.com/lupevu/image/upload/v1643460719/logo_github_uoyzl1.png" />
      <Footer />
    </HomeStyle>
  );
};

export default ApiProject;