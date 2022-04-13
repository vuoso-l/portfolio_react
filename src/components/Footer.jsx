import { useContext } from "react";

import { imgEmail, imgGithub, imgLinkedin } from "../styleAux/fontAwesoneIcon";
import { FooterStyle } from "../stylesComponents/FooterStyle";
import ThemeContext from "../context/ThemeContext";

import SocialNetwork from "./SocialNetwork";

const Footer = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <FooterStyle theme={theme}>
      <SocialNetwork
        url="https://www.linkedin.com/in/vuoso-l/"
        imgFontAw={imgLinkedin}
        socNetName="LinkedIn"
      />
      <SocialNetwork
        url="https://github.com/vuoso-l/"
        imgFontAw={imgGithub}
        socNetName="GitHub"
      />
      <p>{imgEmail} vuosolucas@gmail.com</p>
    </FooterStyle>
  );
};

export default Footer;
