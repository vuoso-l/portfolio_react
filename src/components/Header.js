import React from "react";
import { H1Style, H2Style, H4Style } from "./BasicTagsStyle";
import { HeaderStyle } from "./HeaderStyle";

const Header = () => {
  return (
    <HeaderStyle>
      <H2Style>Lucas Vuoso</H2Style>
      <H4Style>Frontend Web Developer - junior</H4Style>
      <H1Style>Portfolio</H1Style>
    </HeaderStyle>
  );
};

export default Header;
