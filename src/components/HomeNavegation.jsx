import { useContext } from "react";
import { Link } from "react-router-dom";

import { HomeNavigationStyle } from "../stylesComponents/HomeNavigationStyle";
import ThemeContext from "../context/ThemeContext";
import translation from "../translations/home.json";
import LanguageContext from "../context/LanguageContext";

const HomeNavegation = () => {
  const { theme } = useContext(ThemeContext);
  const { language } = useContext(LanguageContext);

  let languageCont;

  language === "english"
    ? (languageCont = translation.contentNavegation.english)
    : (languageCont = translation.contentNavegation.spanish);

  return (
    <HomeNavigationStyle theme={theme}>
      <Link className="link" to={"/projects"}>
        {languageCont.projects}
      </Link>
      <Link className="link" to={"/contact"}>
        {languageCont.contact}
      </Link>
      <Link className="link" to={"/resume"}>
        {languageCont.resume}
      </Link>
    </HomeNavigationStyle>
  );
};

export default HomeNavegation;
