import React, { useContext } from "react";
import AcademicComponent from "../components/AcademicComponent";
import ExperienceComponent from "../components/ExperienceComponent";
import Footer from "../components/Footer";
import Header from "../components/Header";
import TechStackComponent from "../components/TechStackComponent";
import ThemeContext from "../context/ThemeContext";
import { H2CardStyle, H3CardStyle } from "../stylesComponents/BasicTagsStyle";
import { ContainerStyle } from "../stylesComponents/ContainerStyle";
import { ResumeStyle } from "../stylesComponents/ResumeStyle";

const Resume = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <ContainerStyle theme={theme}>
      <Header />
      <ResumeStyle theme={theme}>
        <H2CardStyle theme={theme}>Contact</H2CardStyle>
        <p>
          I am a Frontend Developer, graduated from UTN Buenos Aires (E-learning
          Center) as a fullStack developer with ReactJS and NodeJS. I am
          currently finishing the first year of the Certified Tech Developer
          career sponsored by MercadoLibre, Globant and Digital House.
        </p>
        <div className="container">
          <div className="techStack">
            <H3CardStyle theme={theme}>Tech stack</H3CardStyle>
            <TechStackComponent
              h4="Frontend"
              p="Javascript | ReactJS | HTML5 | CSS3 / SCSS / Styled-components"
            />
            <TechStackComponent h4="Backend" p="Java - Spring Boot" />
            <TechStackComponent h4="FullStack" p="Node Js. - Express | MySql" />
            <TechStackComponent
              h4="Tools"
              p="GitHub | Agile Methodologies (Lean / Kanvan / Scrum) | Heroku |
            EsLint - Husky - Lint staged | Slack | VisualCode"
            />
            <>
              <H3CardStyle theme={theme}>Languages</H3CardStyle>
              <p>English - B1 level</p>
              <p>Italian - beginner level</p>
            </>
          </div>
          <div className="academic">
            <H3CardStyle theme={theme}>Academic history</H3CardStyle>
            <AcademicComponent
              h4="Digital House"
              p1="Certified Tech Developer sponsored by MercadoLibre and Globant"
              p2="June 2021 to present"
            />
            <AcademicComponent
              h4="UTN Buenos Aires"
              p1="Degree in full stack web programming with React JS"
              p2="August 2021"
            />
            <AcademicComponent
              h4="Universidad Nacional de Quilmes"
              p1="Degree of Occupational Therapy"
              p2="September 2019"
            />
            <AcademicComponent
              h4="ISFD n° 101"
              p1="Physical Education Professor"
              p2="February 2010"
            />
          </div>
          <div className="experience">
            <H3CardStyle theme={theme}>Work experience</H3CardStyle>
            <p>
              En la sección "Projects" los proyectos que he realizado hasta la
              fecha. Si querés ver todos mis proyectos, accedé a mi{" "}
              <a
                href="https://github.com/vuoso-l/"
                target="_blank"
                rel="noreferrer"
              >
                Github
              </a>
            </p>
            <ExperienceComponent
              h4="Hospital Italiano de Buenos Aires"
              p1="Aprender Salud, Programa Bajando de Peso"
              p2="July 2010 to December 2021"
              p3="Stretching and training classes. Professional in therapeutic groups.
            Interdisciplinary team."
            />
          </div>
        </div>
      </ResumeStyle>
      <Footer />
    </ContainerStyle>
  );
};

export default Resume;
