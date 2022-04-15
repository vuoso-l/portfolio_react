import { useContext } from "react";

import LanguageContext from "../context/LanguageContext";
import ThemeContext from "../context/ThemeContext";
import translation from "../translations/header.json";

const LanguageSelect = () => {
  const { theme } = useContext(ThemeContext);
  const { language, handleLanguage } = useContext(LanguageContext);

  let languageCont;

  language === "English"
    ? (languageCont = translation.contentSelect.English)
    : (languageCont = translation.contentSelect.Espanish);

  return (
    <select theme={theme} value={language} onChange={(e) => handleLanguage(e)}>
      <option value="English">{languageCont.english}</option>
      <option value="Espanish">{languageCont.espanish}</option>
    </select>
  );
};

export default LanguageSelect;
