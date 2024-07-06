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
export const ImgLinkedin = ({ color = "black" }) => (
  <FontAwesomeIcon style={{ color }} icon={faLinkedin} />
);
export const ImgGithub = ({ color = "black" }) => (
  <FontAwesomeIcon style={{ color }} icon={faGithub} />
);
export const ImgEmail = ({ color = "black" }) => (
  <FontAwesomeIcon style={{ color }} icon={faEnvelope} />
);
export const ImgWhatsapp = ({ color = "black" }) => (
  <FontAwesomeIcon style={{ color }} icon={faWhatsapp} />
);
