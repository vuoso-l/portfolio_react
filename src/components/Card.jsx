import { useContext } from "react";
import { Link } from "react-router-dom";

import ThemeContext from "../context/ThemeContext";
import translation from "../translations/projects.json";
import LanguageContext from "../context/LanguageContext";
import { H3CardStyle, ImgStyle } from "../stylesComponents/BasicTagsStyle";
import { CardStyle } from "../stylesComponents/CardStyle";

const Card = ({ name, p, urlImg, urlPage }) => {
  const { theme } = useContext(ThemeContext);
  const { language } = useContext(LanguageContext);

  let languageCont;

  language === "English"
    ? (languageCont = translation.contentCard.English)
    : (languageCont = translation.contentCard.Espanish);

  return (
    <CardStyle theme={theme}>
      <div>
        <H3CardStyle theme={theme}>{name}</H3CardStyle>
        <p theme={theme}>{p}</p>
        <Link theme={theme} className="button" to={urlPage}>
          {languageCont.buttonEnter}
        </Link>
      </div>
      <Link theme={theme} className="link" to={urlPage}>
        <ImgStyle src={urlImg} alt="img" />
      </Link>
    </CardStyle>
  );
};

export default Card;
