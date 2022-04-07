import React, { useContext } from "react";
import { imgGithub, imgLinkedin } from "../styleAux/fontAwesoneIcon";
import { FooterStyle } from "../stylesComponents/FooterStyle";
import ThemeContext from "../context/ThemeContext";

const Footer = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <FooterStyle theme={theme}>
      <a
        href="https://www.linkedin.com/in/vuoso-l/"
        target="_blank"
        rel="noreferrer"
      >
        {imgLinkedin} LinkedIn
      </a>
      <a href="https://github.com/vuoso-l/" target="_blank" rel="noreferrer">
        {imgGithub} GitHub
      </a>
    </FooterStyle>
  );
};

export default Footer;
