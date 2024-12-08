import styled from "styled-components";

import { device } from "../styleAux/deviceSize";
import { displayFlex } from "../styleAux/theme";

export const HeaderStyle = styled.header`
  ${displayFlex("flex", "column", "space-around", "center")};
  width: 100%;
  height: 200px;
  img {
    width: 100%;
    height: 200px;
    object-fit: cover;
  }
  label {
    width: 40px;
    height: 40px;
    text-align: center;
    font-size: 30px;
    color: ${({ theme }) => (theme === "light" ? "white" : "yellow")};
    cursor: pointer;
    input {
      opacity: 0;
      width: 0;
      height: 0;
    }
  }
  @media ${device.tablet} {
    height: 250px;
    img {
      height: 250px;
      object-fit: unset;
    }
    label {
      width: 55px;
      height: 55px;
      font-size: 35px;
    }
  }
  @media ${device.laptop} {
    height: 300px;
    img {
      height: 300px;
    }
  }
  @media ${device.laptopM} {
    height: 350px;
    img {
      height: 350px;
    }
    label {
      width: 70px;
      height: 70px;
      font-size: 45px;
    }
  }
`;
