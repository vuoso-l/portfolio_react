import { useContext } from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

import { NavigationStyle } from "../stylesComponents/NavegationStyle";
import ThemeContext from "../context/ThemeContext";
import LanguageContext from "../context/LanguageContext";
import translation from "../translations/header.json";

import LanguageSelect from "./LanguageSelect";

const Navegation = () => {
  const { theme } = useContext(ThemeContext);
  const { language } = useContext(LanguageContext);

  let languageCont;

  language === "English"
    ? (languageCont = translation.contentNavegation.English)
    : (languageCont = translation.contentNavegation.Espanish);

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
                {languageCont.projects}
              </Link>
              <Link className="link" to={"/contact"}>
                {languageCont.contact}
              </Link>
              <Link className="link" to={"/resume"}>
                {languageCont.resume}
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <LanguageSelect />
    </NavigationStyle>
  );
};

export default Navegation;
