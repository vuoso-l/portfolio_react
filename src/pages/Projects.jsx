import { useContext } from "react";

import Card from "../components/Card";
import { ContainerStyle } from "../stylesComponents/ContainerStyle";
import ThemeContext from "../context/ThemeContext";
import translation from "../translations/projects.json";
import LanguageContext from "../context/LanguageContext";
import { H2CardStyle } from "../stylesComponents/BasicTagsStyle";
import { ProjectsStyle } from "../stylesComponents/ProjectsStyle";

const Home = () => {
  const { theme } = useContext(ThemeContext);
  const { language } = useContext(LanguageContext);

  let languageCont;

  language === "english"
    ? (languageCont = translation.contentProjects.english)
    : (languageCont = translation.contentProjects.spanish);

  return (
    <ContainerStyle theme={theme}>
      <ProjectsStyle theme={theme}>
        <H2CardStyle theme={theme}>{languageCont.h2}</H2CardStyle>
        <div className="container">
          <Card
            name={languageCont.ReactProjects.name}
            p={languageCont.ReactProjects.p}
            urlImg="https://res.cloudinary.com/lupevu/image/upload/v1643460719/react_tctrfo.png"
            urlPage="/react-projects"
          />
          <Card
            name={languageCont.VanilaJsProjects.name}
            p={languageCont.VanilaJsProjects.p}
            urlImg="https://res.cloudinary.com/lupevu/image/upload/v1643460718/html-css-js_lesdpl.png"
            urlPage="/dinamic-projects"
          />
          <Card
            name={languageCont.OwnApiProjects.name}
            p={languageCont.OwnApiProjects.p}
            urlImg="https://res.cloudinary.com/lupevu/image/upload/v1643460718/front-api_r0nve2.png"
            urlPage="/api-projects"
          />
          <Card
            name={languageCont.StaticProjects.name}
            p={languageCont.StaticProjects.p}
            urlImg="https://res.cloudinary.com/lupevu/image/upload/v1643460718/html-css_s2djr2.jpg"
            urlPage="/static-projects"
          />
        </div>
      </ProjectsStyle>
    </ContainerStyle>
  );
};

export default Home;
