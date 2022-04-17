import { useContext } from "react";

import CardItem from "../components/CardItem";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { ContainerStyle } from "../stylesComponents/ContainerStyle";
import CardTitle from "../components/CardTitle";
import { CardContainer } from "../stylesComponents/BasicTagsStyle";
import ThemeContext from "../context/ThemeContext";

const VanillaJsProjects = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <ContainerStyle theme={theme}>
      <Header />
      <main>
        <CardTitle title="Vanilla Javascript projects" nav="/projects" />
        <CardContainer>
          <CardItem
            name="Webpage Manteca & Harina"
            p="In construction"
            urlImg="https://res.cloudinary.com/lupevu/image/upload/v1643460719/logo_m_h_rdgobd.jpg"
            urlPage="https://vuoso-l.github.io/client-manteca-y-harina/"
          />
          <CardItem
            name="ToDo app"
            p="In construction"
            urlImg="https://res.cloudinary.com/lupevu/image/upload/v1643460720/ToDo_app_wmcnac.png"
            urlPage="https://vuoso-l.github.io/Frontend2/ToDo_inicial"
          />
        </CardContainer>
      </main>
      <Footer />
    </ContainerStyle>
  );
};

export default VanillaJsProjects;
