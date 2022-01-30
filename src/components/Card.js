import React from "react";
import { Link } from "react-router-dom";
import { H2CardStyle, ImgStyle } from "./BasicTagsStyle";
import { CardStyle } from "./CardStyle";

const Card = ({ name, urlImg, urlPage }) => {
  return (
    <CardStyle>
      <H2CardStyle>{name}</H2CardStyle>
      <ImgStyle src={urlImg} alt="img"></ImgStyle>
      <Link className="link" to={urlPage}>Ingresar</Link>
    </CardStyle>
  );
};

export default Card;
