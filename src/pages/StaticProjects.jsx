import { useContext } from "react";

import CardItem from "../components/CardItem";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { ContainerStyle } from "../stylesComponents/ContainerStyle";
import CardTitle from "../components/CardTitle";
import { CardContainer } from "../stylesComponents/BasicTagsStyle";
import ThemeContext from "../context/ThemeContext";

const StaticProjects = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <ContainerStyle theme={theme}>
      <Header />
      <main>
        <CardTitle title="Static projects" nav="/projects" />
        <CardContainer>
          <CardItem
            name="Petshop"
            p="In construction"
            urlImg="https://res.cloudinary.com/lupevu/image/upload/v1643460719/pawprint_1_h6yz0v.svg"
            urlPage="https://vuoso-l.github.io/Frontend1/petShop/"
          />
          <CardItem
            name="Heroes"
            p="In construction"
            urlImg="https://res.cloudinary.com/lupevu/image/upload/v1643463142/liga_de_la_justicia_ffsmdn.jpg"
            urlPage="https://vuoso-l.github.io/Frontend1/heroes/"
          />
        </CardContainer>
      </main>
      <Footer />
    </ContainerStyle>
  );
};

export default StaticProjects;
