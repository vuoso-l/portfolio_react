import React, { useContext } from "react";
import { HomeStyle } from "../stylesComponents/HomeStyle";
import PresentationDescription from "./PresentationDescription";
import PresentationImage from "./PresentationImage";
import ThemeContext from "../context/ThemeContext";

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
