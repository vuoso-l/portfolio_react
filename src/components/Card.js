import React from "react";
import { H2Style, GralButton, ImgStyle } from "./BasicTagsStyle";
import { CardStyle } from "./CardStyle";

const Card = ({name, url}) => {
  return (
    <CardStyle>
      <H2Style>{name}</H2Style>
      <ImgStyle src={url} alt="img"></ImgStyle>
      <GralButton>Ingresar</GralButton>
    </CardStyle>
  );
};

export default Card;
