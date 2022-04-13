import { useContext } from "react";

import ThemeContext from "../context/ThemeContext";
import { DescriptionStyle } from "../stylesComponents/DescriptionStyle";

import HomeNavegation from "./HomeNavegation";

const PresentationDescription = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <DescriptionStyle theme={theme}>
      <h2>Hello!!</h2>
      <h3>A bit about me</h3>
      <p>
        I am a Frontend Developer, graduated from UTN Buenos Aires (E-learning
        Center) as a fullStack developer with ReactJS and NodeJS. I am currently
        finishing the first year of the Certified Tech Developer career
        sponsored by MercadoLibre, Globant and Digital House.
      </p>
      <HomeNavegation />
    </DescriptionStyle>
  );
};

export default PresentationDescription;
