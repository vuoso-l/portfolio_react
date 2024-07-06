import { useContext } from "react";

import { HomeStyle } from "../stylesComponents/HomeStyle";
import LanguageContext from "../context/LanguageContext";
import ThemeContext from "../context/ThemeContext";
import translation from "../translations/home.json";

import PresentationDescription from "./PresentationDescription";
import PresentationImage from "./PresentationImage";

const Presentation = () => {
  const { theme } = useContext(ThemeContext);
  const { language } = useContext(LanguageContext);

  let languageCont;

  language === "english"
    ? (languageCont = translation.contentDescription.english)
    : (languageCont = translation.contentDescription.spanish);

  return (
    <HomeStyle theme={theme}>
      <h2>{languageCont.h2}</h2>
      <PresentationImage />
      <PresentationDescription />
    </HomeStyle>
  );
};

export default Presentation;
