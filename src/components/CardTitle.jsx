import { useContext } from "react";
import { Link } from "react-router-dom";

import { H2CardStyle } from "../stylesComponents/BasicTagsStyle";
import { CardTitleStyle } from "../stylesComponents/CardTitleStyle";
import ThemeContext from "../context/ThemeContext";

function CardTitle({ title, nav }) {
  const { theme } = useContext(ThemeContext);

  return (
    <CardTitleStyle theme={theme}>
      <H2CardStyle theme={theme}>{title}</H2CardStyle>
      <Link className="link" to={nav}>
        Return
      </Link>
    </CardTitleStyle>
  );
}

export default CardTitle;
