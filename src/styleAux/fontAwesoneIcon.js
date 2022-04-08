import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { faMoon, faSun, faEnvelope } from "@fortawesome/free-solid-svg-icons";

export const imgSun = (
  <FontAwesomeIcon style={{ color: "yellow" }} icon={faSun} />
);
export const imgMoon = (
  <FontAwesomeIcon style={{ color: "white" }} icon={faMoon} />
);
export const imgLinkedin = (
  <FontAwesomeIcon style={{ color: "blue" }} icon={faLinkedin} />
);
export const imgGithub = <FontAwesomeIcon icon={faGithub} />;
export const imgEmail = <FontAwesomeIcon icon={faEnvelope} />;
export const imgWhatsapp = (
  <FontAwesomeIcon style={{ color: "green" }} icon={faWhatsapp} />
);
