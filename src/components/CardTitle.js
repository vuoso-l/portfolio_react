import React from "react";
import { Link } from "react-router-dom";
import { H2CardStyle } from "../stylesComponents/BasicTagsStyle";
import { CardTitleStyle } from "../stylesComponents/CardTitleStyle";

function CardTitle({ title, nav }) {
  return (
    <CardTitleStyle>
      <H2CardStyle>{title}</H2CardStyle>
      <Link className="link" to={nav}>
        Regresar
      </Link>
    </CardTitleStyle>
  );
}

export default CardTitle;
