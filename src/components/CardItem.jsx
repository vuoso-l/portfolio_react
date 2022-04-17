import { useContext } from "react";

import ThemeContext from "../context/ThemeContext";
import translation from "../translations/contentCard.json";
import LanguageContext from "../context/LanguageContext";
import {
  H3CardStyle,
  GralAnchor,
  ImgStyle,
} from "../stylesComponents/BasicTagsStyle";
import { CardStyle } from "../stylesComponents/CardStyle";

const CardItem = ({ name, p, urlGitHub, urlImg, urlPage }) => {
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
        <a
          className="githubAnchor"
          theme={theme}
          href={urlGitHub}
          target="_blank"
          rel="noreferrer"
        >
          {languageCont.githubCode}
        </a>
        <a
          className="button"
          theme={theme}
          href={urlPage}
          target="_blank"
          rel="noreferrer"
        >
          {languageCont.buttonEnter}
        </a>
      </div>
      <GralAnchor theme={theme} href={urlPage} target="_blank">
        <ImgStyle src={urlImg} alt="img" />
      </GralAnchor>
    </CardStyle>
  );
};

export default CardItem;
