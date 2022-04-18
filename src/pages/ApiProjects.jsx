import { useContext } from "react";

import { CardContainer } from "../stylesComponents/BasicTagsStyle";
import CardItem from "../components/CardItem";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { ContainerStyle } from "../stylesComponents/ContainerStyle";
import CardTitle from "../components/CardTitle";
import ThemeContext from "../context/ThemeContext";
import translation from "../translations/apiProject.json";
import LanguageContext from "../context/LanguageContext";

const ApiProject = () => {
  const { theme } = useContext(ThemeContext);
  const { language } = useContext(LanguageContext);

  let languageCont;

  language === "English"
    ? (languageCont = translation.contentApiProjects.English)
    : (languageCont = translation.contentApiProjects.Espanish);

  return (
    <ContainerStyle theme={theme}>
      <Header />
      <main>
        <CardTitle title={languageCont.h2} nav="/projects" />
        <CardContainer>
          <CardItem
            name={languageCont.MantecaHarina.name}
            p={languageCont.MantecaHarina.p}
            urlImg="https://res.cloudinary.com/lupevu/image/upload/v1643460719/logo_github_uoyzl1.png"
            urlPage="https://github.com/vuoso-l/api-manteca-y-harina/"
          />
          <CardItem
            name={languageCont.apiUtn.name}
            p={languageCont.apiUtn.p}
            urlImg="https://res.cloudinary.com/lupevu/image/upload/v1643460719/logo_github_uoyzl1.png"
            urlPage="https://github.com/vuoso-l/utn_NodeJS_grupo1"
          />
        </CardContainer>
      </main>
      <Footer />
    </ContainerStyle>
  );
};

export default ApiProject;
