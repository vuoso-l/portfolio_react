import { useContext } from "react";

import Footer from "../components/Footer";
import Header from "../components/Header";
import SocialNetwork from "../components/SocialNetwork";
import ThemeContext from "../context/ThemeContext";
import translation from "../translations/contact.json";
import LanguageContext from "../context/LanguageContext";
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
  const { language } = useContext(LanguageContext);

  let languageCont;

  language === "english"
    ? (languageCont = translation.contentContact.english)
    : (languageCont = translation.contentContact.spanish);

  return (
    <ContainerStyle theme={theme}>
      <Header />
      <ContactStyle theme={theme}>
        <H2CardStyle theme={theme}>{languageCont.h2}</H2CardStyle>
        <H3CardStyle theme={theme}>{languageCont.h3}</H3CardStyle>
        <div>
          <SocialNetwork
            className="anchor"
            url="https://wa.me/542613408371"
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
        </div>
      </ContactStyle>
      <Footer />
    </ContainerStyle>
  );
};

export default Contact;
