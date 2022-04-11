import React, { useContext } from "react";
import ThemeContext from "../context/ThemeContext";
import {
  H3CardStyle,
  GralAnchor,
  ImgStyle,
} from "../stylesComponents/BasicTagsStyle";
import { CardStyle } from "../stylesComponents/CardStyle";

const CardItem = ({ name, urlImg, urlPage }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <CardStyle theme={theme}>
      <H3CardStyle theme={theme}>{name}</H3CardStyle>
      <GralAnchor theme={theme} href={urlPage} target="_blank">
        <ImgStyle src={urlImg} alt="img"></ImgStyle>
      </GralAnchor>
    </CardStyle>
  );
};

export default CardItem;
