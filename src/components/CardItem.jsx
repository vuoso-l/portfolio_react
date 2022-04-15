import { useContext } from "react";

import ThemeContext from "../context/ThemeContext";
import {
  H3CardStyle,
  GralAnchor,
  ImgStyle,
} from "../stylesComponents/BasicTagsStyle";
import { CardStyle } from "../stylesComponents/CardStyle";

const CardItem = ({ name, p, urlImg, urlPage }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <CardStyle theme={theme}>
      <div>
        <H3CardStyle theme={theme}>{name}</H3CardStyle>
        <p theme={theme}>{p}</p>
        <a
          className="button"
          theme={theme}
          href={urlPage}
          target="_blank"
          rel="noreferrer"
        >
          Enter
        </a>
      </div>
      <GralAnchor theme={theme} href={urlPage} target="_blank">
        <ImgStyle src={urlImg} alt="img" />
      </GralAnchor>
    </CardStyle>
  );
};

export default CardItem;
