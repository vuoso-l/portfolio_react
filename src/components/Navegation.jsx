import { useContext } from "react";
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
              <Link className="link" to={"/projects"}>
                Projects
              </Link>
              <Link className="link" to={"/contact"}>
                Contact
              </Link>
              <Link className="link" to={"/resume"}>
                Resume
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </NavigationStyle>
  );
};

export default Navegation;
