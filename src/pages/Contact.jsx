import React, { useContext } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import SocialNetwork from "../components/SocialNetwork";
import ThemeContext from "../context/ThemeContext";
import {
  imgGithub,
  imgLinkedin,
  imgWhatsapp,
} from "../styleAux/fontAwesoneIcon";
import { H2CardStyle, H3CardStyle } from "../stylesComponents/BasicTagsStyle";
import { ContactStyle } from "../stylesComponents/ContactStyle";
import { ContainerStyle } from "../stylesComponents/ContainerStyle";

const Contact = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <ContainerStyle theme={theme}>
      <Header />
      <ContactStyle theme={theme}>
        <H2CardStyle theme={theme}>Contact</H2CardStyle>
        <H3CardStyle theme={theme}>
          I look forward to hearing from you
        </H3CardStyle>
        <SocialNetwork
          className="anchor"
          url="https://wa.me/541169611987"
          imgFontAw={imgWhatsapp}
          socNetName="Whatsapp"
        />
        <SocialNetwork
          className="anchor"
          url="https://www.linkedin.com/in/vuoso-l/"
          imgFontAw={imgLinkedin}
          socNetName="LinkedIn"
        />
        <SocialNetwork
          className="anchor"
          url="https://github.com/vuoso-l/"
          imgFontAw={imgGithub}
          socNetName="GitHub"
        />
      </ContactStyle>
      <Footer />
    </ContainerStyle>
  );
};

export default Contact;
