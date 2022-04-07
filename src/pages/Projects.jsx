import React, { useContext } from "react";
import Card from "../components/Card";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { ContainerStyle } from "../stylesComponents/ContainerStyle";
import ThemeContext from "../context/ThemeContext";
import CardTitle from "../components/CardTitle";

const Home = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <ContainerStyle theme={theme}>
      <Header />
      <CardTitle title="Projects" nav="/" />
      <Card
        name="React JS projects"
        urlImg="https://res.cloudinary.com/lupevu/image/upload/v1643460719/react_tctrfo.png"
        urlPage="/proyectos-react"
      />
      <Card
        name="Projects built with our own API"
        urlImg="https://res.cloudinary.com/lupevu/image/upload/v1643460718/front-api_r0nve2.png"
        urlPage="/proyectos-api"
      />
      <Card
        name="Vanilla Javascript projects"
        urlImg="https://res.cloudinary.com/lupevu/image/upload/v1643460718/html-css-js_lesdpl.png"
        urlPage="/proyectos-dinamicos"
      />
      <Card
        name="Static projects"
        urlImg="https://res.cloudinary.com/lupevu/image/upload/v1643460718/html-css_s2djr2.jpg"
        urlPage="/proyectos-estaticos"
      />
      <Footer />
    </ContainerStyle>
  );
};

export default Home;
