import { useContext } from "react";

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
            p="In this section you will be able to visualize projects made with React Js, using different functionalities and tools such as: useStates, useEffect, useContext, useReducers, react-router, styled-components, fontawesone, linters, among others."
            urlImg="https://res.cloudinary.com/lupevu/image/upload/v1643460719/react_tctrfo.png"
            urlPage="/react-projects"
          />
          <Card
            name="Projects built with our own API"
            p="In this section you will be able to visualize projects made with React Js. as well as with Vanilla Js., using own Api Rest created with Node Js. - Express and Java - Spring Boot."
            urlImg="https://res.cloudinary.com/lupevu/image/upload/v1643460718/front-api_r0nve2.png"
            urlPage="/api-projects"
          />
          <Card
            name="Vanilla Javascript projects"
            p="In this section you will be able to visualize projects made with Vanilla Js, using different functionalities and tools such as: reactive web, forms, DOM manipulation, asynchronous Fetch requests and APIs, among others."
            urlImg="https://res.cloudinary.com/lupevu/image/upload/v1643460718/html-css-js_lesdpl.png"
            urlPage="/dinamic-projects"
          />
          <Card
            name="Static projects"
            p="In this section you will be able to visualize projects made in HTML5, using different functionalities and tools such as: CSS3, SCSS, FlexBox, forms, among others."
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
