import React from "react";
import { H2Style, GralButton, ImgStyle } from "./BasicTagsStyle";
import { CardStyle } from "./CardStyle";

const Card = ({name, urlImg}) => {
  return (
    <CardStyle>
      <H2Style>{name}</H2Style>
      <ImgStyle src={urlImg} alt="img"></ImgStyle>
      <GralButton>Ingresar</GralButton>
    </CardStyle>
  );
};

export default Card;
