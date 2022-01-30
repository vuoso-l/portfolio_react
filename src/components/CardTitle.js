import React from 'react';
import { Link } from 'react-router-dom';
import { H2CardStyle } from './BasicTagsStyle';
import { CardTitleStyle } from './CardTitleStyle';

function CardTitle({title}) {
    return (
      <CardTitleStyle>
        <H2CardStyle>{title}</H2CardStyle>
        <Link className="link" to="/">Regresar a Home</Link>
      </CardTitleStyle>
    );
  }
  
  export default CardTitle;