import { useContext } from "react";
import { Link } from "react-router-dom";

import { HomeNavigationStyle } from "../stylesComponents/HomeNavigationStyle";
import ThemeContext from "../context/ThemeContext";

const HomeNavegation = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <HomeNavigationStyle theme={theme}>
      <Link className="link" to={"/projects"}>
        Projects
      </Link>
      <Link className="link" to={"/contact"}>
        Contact
      </Link>
      <Link className="link" to={"/resume"}>
        Resume
      </Link>
    </HomeNavigationStyle>
  );
};

export default HomeNavegation;
