import { useContext } from "react";

import { CardContainer } from "../stylesComponents/BasicTagsStyle";
import CardItem from "../components/CardItem";
import { ContainerStyle } from "../stylesComponents/ContainerStyle";
import CardTitle from "../components/CardTitle";
import ThemeContext from "../context/ThemeContext";
import translation from "../translations/apiProject.json";
import LanguageContext from "../context/LanguageContext";

const ApiProject = () => {
  const { theme } = useContext(ThemeContext);
  const { language } = useContext(LanguageContext);

  let languageCont;

  language === "english"
    ? (languageCont = translation.contentApiProjects.english)
    : (languageCont = translation.contentApiProjects.spanish);

  return (
    <ContainerStyle theme={theme}>
      <main>
        <CardTitle title={languageCont.h2} nav="/projects" />
        <CardContainer>
          <CardItem
            name={languageCont.DentalClinic.name}
            p={languageCont.DentalClinic.p}
            urlImg="https://res.cloudinary.com/lupevu/image/upload/v1650408155/dentalclinic_s5s59q.jpg"
            urlPage="https://github.com/vuoso-l/api-dental-clinic"
          />
          <CardItem
            name={languageCont.MantecaHarina.name}
            p={languageCont.MantecaHarina.p}
            urlImg="https://res.cloudinary.com/lupevu/image/upload/v1643460719/logo_m_h_rdgobd.jpg"
            urlPage="https://github.com/vuoso-l/api-manteca-y-harina/"
          />
          <CardItem
            name={languageCont.apiUtn.name}
            p={languageCont.apiUtn.p}
            urlImg="https://res.cloudinary.com/lupevu/image/upload/v1650408162/biblioteca_ikqmds.jpg"
            urlPage="https://github.com/vuoso-l/utn_NodeJS_grupo1"
          />
        </CardContainer>
      </main>
    </ContainerStyle>
  );
};

export default ApiProject;
