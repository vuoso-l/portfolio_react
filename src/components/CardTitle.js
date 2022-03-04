import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import ThemeContext from "../context/ThemeContext";
import { H2CardStyle } from './BasicTagsStyle';
import { CardTitleStyle } from './CardTitleStyle';

function CardTitle({title}) {
  const { theme } = useContext(ThemeContext);

    return (
      <CardTitleStyle theme={theme}>
        <H2CardStyle theme={theme}>{title}</H2CardStyle>
        <Link className="link" to="/">Regresar a Home</Link>
      </CardTitleStyle>
    );
  }
  
  export default CardTitle;