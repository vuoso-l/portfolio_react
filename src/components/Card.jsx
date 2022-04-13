import { useContext } from "react";
import { Link } from "react-router-dom";

import ThemeContext from "../context/ThemeContext";
import { H3CardStyle, ImgStyle } from "../stylesComponents/BasicTagsStyle";
import { CardStyle } from "../stylesComponents/CardStyle";

const Card = ({ name, p, urlImg, urlPage }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <CardStyle theme={theme}>
      <div>
        <H3CardStyle theme={theme}>{name}</H3CardStyle>
        <p>{p}</p>
      </div>
      <Link theme={theme} className="link" to={urlPage}>
        <ImgStyle src={urlImg} alt="img" />
      </Link>
    </CardStyle>
  );
};

export default Card;
