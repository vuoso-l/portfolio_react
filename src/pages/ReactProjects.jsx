import { useContext } from "react";

import CardItem from "../components/CardItem";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { ContainerStyle } from "../stylesComponents/ContainerStyle";
import CardTitle from "../components/CardTitle";
import { CardContainer } from "../stylesComponents/BasicTagsStyle";
import ThemeContext from "../context/ThemeContext";
import translation from "../translations/reactProject.json";
import LanguageContext from "../context/LanguageContext";

const ReactProjects = () => {
  const { theme } = useContext(ThemeContext);
  const { language } = useContext(LanguageContext);

  let languageCont;

  language === "English"
    ? (languageCont = translation.contentReactProjects.English)
    : (languageCont = translation.contentReactProjects.Espanish);

  return (
    <ContainerStyle theme={theme}>
      <Header />
      <main>
        <CardTitle title="React JS projects" nav="/projects" />
        <CardContainer>
          <CardItem
            name={languageCont.FrontendChallengeAlkemy.name}
            p={languageCont.FrontendChallengeAlkemy.p}
            urlGitHub="https://github.com/vuoso-l/alkemy-react-challenge"
            urlImg="https://res.cloudinary.com/lupevu/image/upload/v1649370256/challenge_alkemy_ypaled.jpg"
            urlPage="https://alkemy-react-challenge-one.vercel.app/login"
          />
          <CardItem
            name={languageCont.FrontendChallengeSec.name}
            p={languageCont.FrontendChallengeSec.p}
            urlGitHub="https://github.com/vuoso-l/frontend_challenge_sec"
            urlImg="https://res.cloudinary.com/lupevu/image/upload/v1646409109/challenge_frontend-sec_djx70i.jpg"
            urlPage="https://frontend-challenge-sec.vercel.app/"
          />
          <CardItem
            name={languageCont.CrudApi.name}
            p={languageCont.CrudApi.p}
            urlGitHub="https://github.com/vuoso-l/react-crud-api_curso_jonMircha"
            urlImg="https://res.cloudinary.com/lupevu/image/upload/v1643460718/crud_azv4bt.png"
            urlPage="https://vuoso-l.github.io/react-crud-api_curso_jonMircha/"
          />
          <CardItem
            name={languageCont.MusicSearcher.name}
            p={languageCont.MusicSearcher.p}
            urlGitHub="https://github.com/vuoso-l/react-buscador_canciones_curso_jonMircha"
            urlImg="https://res.cloudinary.com/lupevu/image/upload/v1643460718/buscador_canciones_yy1zzc.jpg"
            urlPage="https://vuoso-l.github.io/react-buscador_canciones_curso_jonMircha/"
          />
        </CardContainer>
      </main>
      <Footer />
    </ContainerStyle>
  );
};

export default ReactProjects;
