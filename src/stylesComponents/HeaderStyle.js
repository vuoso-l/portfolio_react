import styled from "styled-components";
import { device } from "../styleAux/deviceSize";
import { displayFlex, backgroundHeader } from "../styleAux/theme";

export const HeaderStyle = styled.header`
  ${displayFlex("flex", "column", "space-around", "center")};
  width: 100%;
  height: 200px;
  ${backgroundHeader(
    "https://res.cloudinary.com/lupevu/image/upload/v1643460719/portada_linkedin2_hvcxj4.jpg",
  )};
  label {
    width: 40px;
    height: 40px;
    text-align: center;
    font-size: 30px;
    cursor: pointer;
    input {
      opacity: 0;
      width: 0;
      height: 0;
    }
  }
  @media ${device.tablet} {
    height: 250px;
    label {
      width: 55px;
      height: 55px;
      font-size: 35px;
    }
  }
  @media ${device.laptop} {
    height: 300px;
  }
  @media ${device.laptopM} {
    height: 350px;
    label {
      width: 70px;
      height: 70px;
      font-size: 45px;
    }
  }
`;
