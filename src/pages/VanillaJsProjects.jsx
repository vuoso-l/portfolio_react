import { useContext } from "react";

import CardItem from "../components/CardItem";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { ContainerStyle } from "../stylesComponents/ContainerStyle";
import CardTitle from "../components/CardTitle";
import { CardContainer } from "../stylesComponents/BasicTagsStyle";
import ThemeContext from "../context/ThemeContext";
import translation from "../translations/vanillaProject.json";
import LanguageContext from "../context/LanguageContext";

const VanillaJsProjects = () => {
  const { theme } = useContext(ThemeContext);
  const { language } = useContext(LanguageContext);

  let languageCont;

  language === "English"
    ? (languageCont = translation.contentVanillaProjects.English)
    : (languageCont = translation.contentVanillaProjects.Espanish);

  return (
    <ContainerStyle theme={theme}>
      <Header />
      <main>
        <CardTitle title={languageCont.h2} nav="/projects" />
        <CardContainer>
          <CardItem
            name={languageCont.MantecaHarina.name}
            p={languageCont.MantecaHarina.p}
            urlGitHub="https://github.com/vuoso-l/client-manteca-y-harina"
            urlImg="https://res.cloudinary.com/lupevu/image/upload/v1643460719/logo_m_h_rdgobd.jpg"
            urlPage="https://vuoso-l.github.io/client-manteca-y-harina/"
          />
          <CardItem
            name={languageCont.ToDoApp.name}
            p={languageCont.ToDoApp.p}
            urlGitHub="https://github.com/vuoso-l/Frontend2/tree/main/ToDo_inicial"
            urlImg="https://res.cloudinary.com/lupevu/image/upload/v1643460720/ToDo_app_wmcnac.png"
            urlPage="https://vuoso-l.github.io/Frontend2/ToDo_inicial"
          />
        </CardContainer>
      </main>
      <Footer />
    </ContainerStyle>
  );
};

export default VanillaJsProjects;
