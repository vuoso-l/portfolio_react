import { useContext } from "react";

import { ButtonDownload } from "../stylesComponents/BasicTagsStyle";
import ThemeContext from "../context/ThemeContext";
import LanguageContext from "../context/LanguageContext";
import translation from "../translations/header.json";
import cvSpanish from "../assets/files/CV-Lucas_Vuoso.pdf";
import cvenglish from "../assets/files/Resume-Lucas_Vuoso.pdf";

const BtnDownload = () => {
  const { theme } = useContext(ThemeContext);
  const { language } = useContext(LanguageContext);

  let languageCont;

  language === "english"
    ? (languageCont = translation.buttonDownload.english)
    : (languageCont = translation.buttonDownload.spanish);

  return (
    <ButtonDownload theme={theme}>
      <a
        href={language === "english" ? cvenglish : cvSpanish}
        target="_blank"
        rel="noopener noreferrer"
        download={
          language === "english" ? "Resume - Lucas Vuoso" : "CV - Lucas Vuoso"
        }
      >
        {languageCont.btn}
      </a>
    </ButtonDownload>
  );
};

export default BtnDownload;
