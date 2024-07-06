import { useContext } from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

import { NavigationStyle } from "../stylesComponents/NavegationStyle";
import ThemeContext from "../context/ThemeContext";
import LanguageContext from "../context/LanguageContext";
import translation from "../translations/header.json";

import LanguageSelect from "./LanguageSelect";
import BtnDownload from "./BtnDownload";

const Navegation = () => {
  const { theme } = useContext(ThemeContext);
  const { language } = useContext(LanguageContext);

  let languageCont;

  language === "english"
    ? (languageCont = translation.contentNavegation.english)
    : (languageCont = translation.contentNavegation.spanish);

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
                {languageCont.me}
              </Link>
              <Link className="link" to={"/resume"}>
                {languageCont.resume}
              </Link>
              <Link className="link" to={"/projects"}>
                {languageCont.projects}
              </Link>
              <Link className="link" to={"/contact"}>
                {languageCont.contact}
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <BtnDownload />
      <LanguageSelect />
    </NavigationStyle>
  );
};

export default Navegation;
