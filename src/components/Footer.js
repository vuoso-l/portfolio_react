import React from "react";
import { imgGithub, imgLinkedin } from "../styleAux/fontAwesoneIcon";
import { FooterStyle } from "./FooterStyle";

const Footer = () => {
  return (
    <FooterStyle>
      <a
        href="https://www.linkedin.com/in/vuoso-l/"
        target="_blank"
        rel="noreferrer"
      >
        {imgLinkedin} LinkedIn
      </a>
      <a
        href="https://github.com/vuoso-l/"
        target="_blank"
        rel="noreferrer"
      >
        {imgGithub} GitHub
      </a>
    </FooterStyle>
  );
};

export default Footer;
