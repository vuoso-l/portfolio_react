import { useContext } from "react";

import SocialNetwork from "../components/SocialNetwork";
import ThemeContext from "../context/ThemeContext";
import translation from "../translations/contact.json";
import LanguageContext from "../context/LanguageContext";
import {
  ImgEmail,
  ImgGithub,
  ImgLinkedin,
  ImgWhatsapp,
} from "../styleAux/fontAwesoneIcon";
import { H3CardStyle } from "../stylesComponents/BasicTagsStyle";
import { ContactStyle } from "../stylesComponents/ContactStyle";
import { ContainerStyle } from "../stylesComponents/ContainerStyle";

const Contact = () => {
  const { theme } = useContext(ThemeContext);
  const { language } = useContext(LanguageContext);

  let languageCont;
  const email = "vuosolucas@gmail.com";

  language === "english"
    ? (languageCont = translation.contentContact.english)
    : (languageCont = translation.contentContact.spanish);

  return (
    <ContainerStyle theme={theme}>
      <ContactStyle theme={theme}>
        <div>
          <SocialNetwork
            url={`mailto:${email}`}
            imgFontAw={<ImgEmail />}
            socNetName="E-mail"
            info={email}
          />
          <SocialNetwork
            url="https://www.linkedin.com/in/vuoso-l/"
            imgFontAw={<ImgLinkedin color="blue" />}
            socNetName="LinkedIn"
            info="vuoso-l"
          />
          <SocialNetwork
            url="https://github.com/vuoso-l/"
            imgFontAw={<ImgGithub />}
            socNetName="GitHub"
            info="vuoso-l"
          />
          <SocialNetwork
            url="https://wa.me/542613408371"
            imgFontAw={<ImgWhatsapp color="green" />}
            socNetName="Whatsapp"
            info="+54 261-340-8371"
          />
        </div>
        <H3CardStyle theme={theme}>{languageCont.h3}</H3CardStyle>
      </ContactStyle>
    </ContainerStyle>
  );
};

export default Contact;
