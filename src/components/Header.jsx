import { useContext } from "react";

import LanguageContext from "../context/LanguageContext";
import { H2Style, H4Style } from "../stylesComponents/BasicTagsStyle";
import { HeaderStyle } from "../stylesComponents/HeaderStyle";
import translation from "../translations/header.json";

import Navegation from "./Navegation";

const Header = () => {
  const { language } = useContext(LanguageContext);

  let languageCont;

  language === "english"
    ? (languageCont = translation.contentHeader.english)
    : (languageCont = translation.contentHeader.spanish);

  return (
    <>
      <HeaderStyle>
        <div>
          <H2Style>Lucas Vuoso</H2Style>
          <H4Style>{languageCont.h4}</H4Style>
        </div>
        {/* Commented this code because I don´t use it now */}
        {/* <label theme={theme}>
          {theme === "light" ? imgMoon : imgSun}
          <input
            type="checkbox"
            onClick={(e) => handleTheme(e)}
            value={theme}
          />
        </label> */}
      </HeaderStyle>
      <Navegation />
    </>
  );
};

export default Header;
