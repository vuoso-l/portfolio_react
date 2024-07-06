import { useContext } from "react";

import { ContainerStyle } from "../stylesComponents/ContainerStyle";
import Presentation from "../components/Presentation";
import ThemeContext from "../context/ThemeContext";

const Home = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <ContainerStyle theme={theme}>
      <Presentation />
    </ContainerStyle>
  );
};

export default Home;
