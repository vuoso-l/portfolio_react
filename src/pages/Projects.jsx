import React, { useContext } from "react";
import Card from "../components/Card";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { ContainerStyle } from "../stylesComponents/ContainerStyle";
import ThemeContext from "../context/ThemeContext";
import { H2CardStyle } from "../stylesComponents/BasicTagsStyle";
import { ProjectsStyle } from "../stylesComponents/ProjectsStyle";

const Home = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <ContainerStyle theme={theme}>
      <Header />
      <ProjectsStyle theme={theme}>
        <H2CardStyle theme={theme}>Projects</H2CardStyle>
        <div className="container">
          <Card
            name="React JS projects"
            urlImg="https://res.cloudinary.com/lupevu/image/upload/v1643460719/react_tctrfo.png"
            urlPage="/react-projects"
          />
          <Card
            name="Projects built with our own API"
            urlImg="https://res.cloudinary.com/lupevu/image/upload/v1643460718/front-api_r0nve2.png"
            urlPage="/api-projects"
          />
          <Card
            name="Vanilla Javascript projects"
            urlImg="https://res.cloudinary.com/lupevu/image/upload/v1643460718/html-css-js_lesdpl.png"
            urlPage="/dinamic-projects"
          />
          <Card
            name="Static projects"
            urlImg="https://res.cloudinary.com/lupevu/image/upload/v1643460718/html-css_s2djr2.jpg"
            urlPage="/static-projects"
          />
        </div>
      </ProjectsStyle>
      <Footer />
    </ContainerStyle>
  );
};

export default Home;
