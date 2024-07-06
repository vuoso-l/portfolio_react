import { useContext } from "react";

import AcademicComponent from "../components/AcademicComponent";
import ExperienceComponent from "../components/ExperienceComponent";
import SocialNetwork from "../components/SocialNetwork";
import TechStackComponent from "../components/TechStackComponent";
import ThemeContext from "../context/ThemeContext";
import translation from "../translations/resume.json";
import LanguageContext from "../context/LanguageContext";
import { H3CardStyle } from "../stylesComponents/BasicTagsStyle";
import { ContainerStyle } from "../stylesComponents/ContainerStyle";
import { ResumeStyle } from "../stylesComponents/ResumeStyle";
import { imgGithub } from "../styleAux/fontAwesoneIcon";

const Resume = () => {
  const { theme } = useContext(ThemeContext);
  const { language } = useContext(LanguageContext);

  let languageCont;

  language === "english"
    ? (languageCont = translation.contentResume.english)
    : (languageCont = translation.contentResume.spanish);

  return (
    <ContainerStyle theme={theme}>
      <ResumeStyle theme={theme}>
        <p>{languageCont.p}</p>
        <div className="container">
          <section>
            <H3CardStyle theme={theme}>
              {languageCont.workExperience.h3}
            </H3CardStyle>
            <div>
              <ExperienceComponent
                h5="Imajine Studio"
                h6="Frontend Developer"
                p1={languageCont.workExperience.p1IS}
                p2={languageCont.workExperience.p2IS}
              />
              <ExperienceComponent
                h5="Hospital Italiano de Buenos Aires - Aprender Salud, Programa Bajando de Peso"
                h6={languageCont.workExperience.subtitle}
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
                p="Javascript | React Js | React Native | Vue Js | HTML5 | CSS3 / SCSS / Styled-components | Bootstrap | UX - UI"
              />
              <TechStackComponent h4="Backend" p="Java - Spring Boot" />
              <TechStackComponent
                h4="FullStack"
                p="Node Js. - Express | MySql"
              />
              <TechStackComponent
                h4={languageCont.techStack.tools}
                p="GitHub | Agile Methodologies (Scrum) | Heroku |
            EsLint - Husky - Lint staged | Slack | Visual Studio Code"
              />
            </div>
          </section>
          <section>
            <H3CardStyle theme={theme}>
              {languageCont.academicHistory.h3}
            </H3CardStyle>
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
                credentialP={languageCont.academicHistory.credentialP}
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
              <p>{languageCont.languages.spanish}</p>
              <p>{languageCont.languages.english}</p>
              <p>{languageCont.languages.italian}</p>
            </div>
          </section>
        </div>
      </ResumeStyle>
    </ContainerStyle>
  );
};

export default Resume;
