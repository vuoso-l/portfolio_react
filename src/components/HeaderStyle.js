import styled from "styled-components";
import { device } from "../styleAux/deviceSize";
import { displayFlex, backgroundHeader } from "../styleAux/theme";

export const HeaderStyle = styled.header`
  ${displayFlex("flex", "column", "space-evenly", "center")};
  width: 100%;
  height: 150px;
  ${backgroundHeader("https://res.cloudinary.com/lupevu/image/upload/v1643460719/portada_linkedin2_hvcxj4.jpg")}
  @media ${device.tablet} {
    height: 250px;
  }
  @media ${device.laptop} {
    height: 300px;
  }
  @media ${device.laptopM} {
    height: 350px;
  }
`;
