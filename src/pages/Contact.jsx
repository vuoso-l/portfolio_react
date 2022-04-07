import React, { useContext } from "react";
import CardTitle from "../components/CardTitle";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ThemeContext from "../context/ThemeContext";
import { ContainerStyle } from "../stylesComponents/ContainerStyle";

const Contact = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <ContainerStyle theme={theme}>
      <Header />
      <CardTitle title="Proyectos" nav="/" />
      <h2>Contact</h2>
      <Footer />
    </ContainerStyle>
  );
};

export default Contact;
