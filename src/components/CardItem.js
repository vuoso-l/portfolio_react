import React, { useContext } from "react";
import ThemeContext from "../context/ThemeContext";
import { H2CardStyle, GralAnchor, ImgStyle } from "./BasicTagsStyle";
import { CardStyle } from "./CardStyle";


const CardItem = ({ name, urlImg, urlPage }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <CardStyle theme={theme}>
      <H2CardStyle theme={theme}>{name}</H2CardStyle>
      <ImgStyle src={urlImg} alt="img"></ImgStyle>
      <GralAnchor theme={theme} href={urlPage} target="_blank">
        Ingresar
      </GralAnchor>
    </CardStyle>
  );
};

export default CardItem;