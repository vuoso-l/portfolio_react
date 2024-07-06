import { useContext } from "react";

import { ImgEmail, ImgGithub, ImgLinkedin } from "../styleAux/fontAwesoneIcon";
import { FooterStyle } from "../stylesComponents/FooterStyle";
import ThemeContext from "../context/ThemeContext";

import SocialNetwork from "./SocialNetwork";

const Footer = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <FooterStyle theme={theme}>
      <SocialNetwork
        url="https://www.linkedin.com/in/vuoso-l/"
        imgFontAw={<ImgLinkedin />}
        socNetName="LinkedIn"
      />
      <SocialNetwork
        url="https://github.com/vuoso-l/"
        imgFontAw={<ImgGithub />}
        socNetName="GitHub"
      />
      <p>{<ImgEmail />} vuosolucas@gmail.com</p>
    </FooterStyle>
  );
};

export default Footer;
