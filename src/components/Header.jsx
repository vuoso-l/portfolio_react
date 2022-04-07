import React, { useContext } from "react";
import ThemeContext from "../context/ThemeContext";
import { imgMoon, imgSun } from "../styleAux/fontAwesoneIcon";
import { H1Style, H2Style, H4Style } from "../stylesComponents/BasicTagsStyle";
import { HeaderStyle } from "../stylesComponents/HeaderStyle";
import Nav from "./Nav";

const Header = () => {
  const { theme, handleTheme } = useContext(ThemeContext);

  return (
    <>
      <HeaderStyle>
        <div>
          <H2Style>Lucas Vuoso</H2Style>
          <H4Style>Frontend Web Developer - junior</H4Style>
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
      <Nav />
    </>
  );
};

export default Header;