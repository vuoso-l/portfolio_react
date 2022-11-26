import { useContext } from "react";

import AcademicComponent from "../components/AcademicComponent";
import ExperienceComponent from "../components/ExperienceComponent";
import Footer from "../components/Footer";
import Header from "../components/Header";
import SocialNetwork from "../components/SocialNetwork";
import TechStackComponent from "../components/TechStackComponent";
import ThemeContext from "../context/ThemeContext";
import translation from "../translations/resume.json";
import LanguageContext from "../context/LanguageContext";
import { H2CardStyle, H3CardStyle } from "../stylesComponents/BasicTagsStyle";
import { ContainerStyle } from "../stylesComponents/ContainerStyle";
import { ResumeStyle } from "../stylesComponents/ResumeStyle";
import { imgGithub } from "../styleAux/fontAwesoneIcon";

const Resume = () => {
  const { theme } = useContext(ThemeContext);
  const { language } = useContext(LanguageContext);

  let languageCont;

  language === "English"
    ? (languageCont = translation.contentResume.English)
    : (languageCont = translation.contentResume.Espanish);

  return (
    <ContainerStyle theme={theme}>
      <Header />
      <ResumeStyle theme={theme}>
        <H2CardStyle theme={theme}>{languageCont.h2}</H2CardStyle>
        <p>{languageCont.p}</p>
        <div className="container">
          <section>
            <H3CardStyle theme={theme}>{languageCont.workExperience.h3}</H3CardStyle>
            <div>
              <ExperienceComponent
                h5="Imajine Studio"
                h6="Frontend Developer"
                p1={languageCont.workExperience.p1IS}
                p2={languageCont.workExperience.p2IS}
              />
              <ExperienceComponent
                h5="Hospital Italiano de Buenos Aires"
                h6="Aprender Salud, Programa Bajando de Peso"
                p1={languageCont.workExperience.p1HI}
                p2={languageCont.workExperience.p2HI}
              />
              <p>
                {languageCont.workExperience.p}
                <SocialNetwork
                  url="https://github.com/vuoso-l/"
                  imgFontAw={imgGithub}
                  socNetName="GitHub"
                />
              </p>
            </div>
          </section>
          <section>
            <H3CardStyle theme={theme}>{languageCont.techStack.h3}</H3CardStyle>
            <div>
              <TechStackComponent
                h4="Frontend"
                p="Javascript | ReactJS | HTML5 | CSS3 / SCSS / Styled-components | UX - UI"
              />
              <TechStackComponent h4="Backend" p="Java - Spring Boot" />
              <TechStackComponent h4="FullStack" p="Node Js. - Express | MySql" />
              <TechStackComponent
                h4={languageCont.techStack.tools}
                p="GitHub | Agile Methodologies (Scrum) | Heroku |
            EsLint - Husky - Lint staged | Slack | VisualCode"
              />
            </div>
          </section>
          <section>
            <H3CardStyle theme={theme}>{languageCont.academicHistory.h3}</H3CardStyle>
            <div>
              <AcademicComponent
                h5="Digital House"
                h6={languageCont.academicHistory.carrerDH}
                p={languageCont.academicHistory.dateDH}
              />
              <AcademicComponent
                h5="UTN Buenos Aires"
                h6={languageCont.academicHistory.carrerUtn}
                urlCredential="https://sigead.utnba.centrodeelearning.com/alumnos/validar_certificado"
                p={languageCont.academicHistory.dateUtn}
              />
              <AcademicComponent
                h5="Universidad Nacional de Quilmes (UNQUI)"
                h6={languageCont.academicHistory.carrerUnqui}
                p={languageCont.academicHistory.dateUnqui}
              />
              <AcademicComponent
                h5="ISFD n° 101"
                h6={languageCont.academicHistory.carrerIsfd}
                p={languageCont.academicHistory.dateIsfd}
              />
            </div>
          </section>
          <section>
            <H3CardStyle theme={theme}>{languageCont.languages.h3}</H3CardStyle>
            <div>
              <p>{languageCont.languages.english}</p>
              <p>{languageCont.languages.italian}</p>
            </div>
          </section>
        </div>
      </ResumeStyle>
      <Footer />
    </ContainerStyle>
  );
};

export default Resume;
