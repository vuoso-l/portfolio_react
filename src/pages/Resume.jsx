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
        <H2CardStyle theme={theme}>Resume</H2CardStyle>
        <p>
          I am a pro-active person, willing to face new challenges and
          constantly trying to improve myself, motivated by teamwork and
          collaboration environments. I am passionate about nature (mainly
          mountains) and sports (running and cycling).
        </p>
        <div className="container">
          <section className="techStack">
            <H3CardStyle theme={theme}>Tech stack</H3CardStyle>
            <div>
              <TechStackComponent
                h4="Frontend"
                p="Javascript | ReactJS | HTML5 | CSS3 / SCSS / Styled-components"
              />
              <TechStackComponent h4="Backend" p="Java - Spring Boot" />
              <TechStackComponent
                h4="FullStack"
                p="Node Js. - Express | MySql"
              />
              <TechStackComponent
                h4="Tools"
                p="GitHub | Agile Methodologies (Lean / Kanvan / Scrum) | Heroku |
            EsLint - Husky - Lint staged | Slack | VisualCode"
              />
            </div>
          </section>
          <section className="language">
            <H3CardStyle theme={theme}>Languages</H3CardStyle>
            <div>
              <p>English - B1 level</p>
              <p>Italian - beginner level</p>
            </div>
          </section>
          <section className="academic">
            <H3CardStyle theme={theme}>Academic history</H3CardStyle>
            <div>
              <AcademicComponent
                h5="Digital House"
                h6="Certified Tech Developer sponsored by MercadoLibre and Globant"
                p="June 2021 to present"
              />
              <AcademicComponent
                h5="UTN Buenos Aires"
                h6="Degree in full stack web programming with React JS"
                p="August 2021"
              />
              <AcademicComponent
                h5="Universidad Nacional de Quilmes"
                h6="Degree of Occupational Therapy"
                p="September 2019"
              />
              <AcademicComponent
                h5="ISFD n° 101"
                h6="Physical Education Professor"
                p="February 2010"
              />
            </div>
          </section>
          <section className="experience">
            <H3CardStyle theme={theme}>Work experience</H3CardStyle>
            <div>
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
                h5="Hospital Italiano de Buenos Aires"
                h6="Aprender Salud, Programa Bajando de Peso"
                p1="Stretching and training classes. Professional in therapeutic groups.
                Interdisciplinary team."
                p2="July 2010 to December 2021"
              />
            </div>
          </section>
        </div>
      </ResumeStyle>
      <Footer />
    </ContainerStyle>
  );
};

export default Resume;
