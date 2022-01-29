import React from "react";
import { H2CardStyle, GralAnchor, ImgStyle } from "./BasicTagsStyle";
import { CardStyle } from "./CardStyle";

const Card = ({ name, urlImg, urlPage }) => {
  return (
    <CardStyle>
      <H2CardStyle>{name}</H2CardStyle>
      <ImgStyle src={urlImg} alt="img"></ImgStyle>
      <GralAnchor href={urlPage} target="_blank">
        Ingresar
      </GralAnchor>
    </CardStyle>
  );
};

export default Card;
