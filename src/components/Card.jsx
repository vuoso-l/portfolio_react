import React, { useContext } from "react";
import { Link } from "react-router-dom";
import ThemeContext from "../context/ThemeContext";
import { H2CardStyle, ImgStyle } from "../stylesComponents/BasicTagsStyle";
import { CardStyle } from "../stylesComponents/CardStyle";

const Card = ({ name, urlImg, urlPage }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <CardStyle theme={theme}>
      <H2CardStyle theme={theme}>{name}</H2CardStyle>
      <ImgStyle src={urlImg} alt="img"></ImgStyle>
      <Link theme={theme} className="link" to={urlPage}>
        Enter
      </Link>
    </CardStyle>
  );
};

export default Card;
