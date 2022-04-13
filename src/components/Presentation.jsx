import { useContext } from "react";

import { HomeStyle } from "../stylesComponents/HomeStyle";
import ThemeContext from "../context/ThemeContext";

import PresentationDescription from "./PresentationDescription";
import PresentationImage from "./PresentationImage";

const Presentation = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <HomeStyle theme={theme}>
      <PresentationImage />
      <PresentationDescription />
    </HomeStyle>
  );
};

export default Presentation;
