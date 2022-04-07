import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faMoon, faSun, faEnvelope } from "@fortawesome/free-solid-svg-icons";

export const imgSun = (
  <FontAwesomeIcon style={{ color: "yellow" }} icon={faSun} />
);
export const imgMoon = (
  <FontAwesomeIcon style={{ color: "white" }} icon={faMoon} />
);
export const imgLinkedin = <FontAwesomeIcon icon={faLinkedin} />;
export const imgGithub = <FontAwesomeIcon icon={faGithub} />;
export const imgEmail = <FontAwesomeIcon icon={faEnvelope} />;
