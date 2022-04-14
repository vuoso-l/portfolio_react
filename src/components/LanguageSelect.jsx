import { useContext } from "react";

import LanguageContext from "../context/LanguageContext";
import ThemeContext from "../context/ThemeContext";

const LanguageSelect = () => {
  const { theme } = useContext(ThemeContext);
  const { language, handleLanguage } = useContext(LanguageContext);

  return (
    <select theme={theme} value={language} onChange={(e) => handleLanguage(e)}>
      <option value="English">English</option>
      <option value="Espanish">Espanish</option>
    </select>
  );
};

export default LanguageSelect;
