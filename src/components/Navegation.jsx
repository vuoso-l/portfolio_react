import React, { useContext } from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { NavigationStyle } from "../stylesComponents/NavegationStyle";
import ThemeContext from "../context/ThemeContext";

const Navegation = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <NavigationStyle theme={theme}>
      <Navbar collapseOnSelect expand="lg">
        <Container>
          <Navbar.Toggle
            className="toggle"
            aria-controls="responsive-navbar-nav"
          />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav>
              <Link className="linkBase" to={"/"}>
                Lucas Vuoso
              </Link>
              <Link className="link" to={"/proyectos"}>
                Proyectos
              </Link>
              <Link className="link" to={"/contacto"}>
                Contacto
              </Link>
              <Link className="link" to={"/formacion"}>
                Formación
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </NavigationStyle>
  );
};

export default Navegation;
