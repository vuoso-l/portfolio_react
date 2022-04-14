import { useContext } from "react";

import LanguageContext from "../context/LanguageContext";
import ThemeContext from "../context/ThemeContext";
import { imgMoon, imgSun } from "../styleAux/fontAwesoneIcon";
import { H1Style, H2Style, H4Style } from "../stylesComponents/BasicTagsStyle";
import { HeaderStyle } from "../stylesComponents/HeaderStyle";
import content from "../translations/header.json";

import Navegation from "./Navegation";

const Header = () => {
  const { theme, handleTheme } = useContext(ThemeContext);
  const { language } = useContext(LanguageContext);

  let languageCont;

  language === "English"
    ? (languageCont = content.content.English)
    : (languageCont = content.content.Espanish);

  return (
    <>
      <HeaderStyle>
        <div>
          <H2Style>Lucas Vuoso</H2Style>
          <H4Style>{languageCont.title}</H4Style>
          <H1Style>Portfolio</H1Style>
        </div>
        <label theme={theme}>
          {theme === "light" ? imgMoon : imgSun}
          <input
            type="checkbox"
            onClick={(e) => handleTheme(e)}
            value={theme}
          />
        </label>
      </HeaderStyle>
      <Navegation />
    </>
  );
};

export default Header;
