import { useContext } from "react";

import LanguageContext from "../context/LanguageContext";
import ThemeContext from "../context/ThemeContext";
import { DescriptionStyle } from "../stylesComponents/DescriptionStyle";
import translation from "../translations/home.json";

import HomeNavegation from "./HomeNavegation";

const PresentationDescription = () => {
  const { theme } = useContext(ThemeContext);
  const { language } = useContext(LanguageContext);

  let languageCont;

  language === "english"
    ? (languageCont = translation.contentDescription.english)
    : (languageCont = translation.contentDescription.spanish);

  return (
    <DescriptionStyle theme={theme}>
      <h2>{languageCont.h2}</h2>
      <h3>{languageCont.h3}</h3>
      <p>{languageCont.p}</p>
      <HomeNavegation />
    </DescriptionStyle>
  );
};

export default PresentationDescription;
