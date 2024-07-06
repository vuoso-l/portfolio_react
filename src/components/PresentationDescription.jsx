import { useContext } from "react";

import LanguageContext from "../context/LanguageContext";
import ThemeContext from "../context/ThemeContext";
import { DescriptionStyle } from "../stylesComponents/DescriptionStyle";
import translation from "../translations/home.json";

const PresentationDescription = () => {
  const { theme } = useContext(ThemeContext);
  const { language } = useContext(LanguageContext);

  let languageCont;

  language === "english"
    ? (languageCont = translation.contentDescription.english)
    : (languageCont = translation.contentDescription.spanish);

  return (
    <DescriptionStyle theme={theme}>
      <p>{languageCont.p}</p>
    </DescriptionStyle>
  );
};

export default PresentationDescription;
