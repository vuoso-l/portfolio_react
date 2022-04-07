import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <>
      <Link to={"/"}>Lucas Vuoso</Link>
      <Link to={"/proyectos"}>Proyectos</Link>
      <Link to={"/contacto"}>Contacto</Link>
      <Link to={"/formacion"}>Formación</Link>
    </>
  );
};

export default Nav;
