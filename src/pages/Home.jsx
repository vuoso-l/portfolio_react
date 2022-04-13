import { useContext } from "react";

import { ContainerStyle } from "../stylesComponents/ContainerStyle";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Presentation from "../components/Presentation";
import ThemeContext from "../context/ThemeContext";

const Home = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <ContainerStyle theme={theme}>
      <Header />
      <Presentation />
      <Footer />
    </ContainerStyle>
  );
};

export default Home;
