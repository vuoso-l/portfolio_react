import { useContext } from "react";

import LanguageContext from "../context/LanguageContext";
import spain from "../assets/img/spain.png";
import uk from "../assets/img/united-kingdom.png";
import { LanguageSelectStyle } from "../stylesComponents/LanguageSelectStyle";

const LanguageSelect = () => {
  const { handleLanguage } = useContext(LanguageContext);

  return (
    <LanguageSelectStyle>
      <button onClick={() => handleLanguage("english")}>
        <img src={uk} alt="united kingdom flag" />
      </button>
      <button onClick={() => handleLanguage("spanish")}>
        <img src={spain} alt="united kingdom flag" />
      </button>
    </LanguageSelectStyle>
  );
};

export default LanguageSelect;
