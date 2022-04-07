import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { HomeNavigationStyle } from "../stylesComponents/HomeNavigationStyle";
import ThemeContext from "../context/ThemeContext";

const HomeNavegation = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <HomeNavigationStyle theme={theme}>
      <Link className="link" to={"/proyectos"}>
        Proyectos
      </Link>
      <Link className="link" to={"/contacto"}>
        Contacto
      </Link>
      <Link className="link" to={"/formacion"}>
        Formación
      </Link>
    </HomeNavigationStyle>
  );
};

export default HomeNavegation;
